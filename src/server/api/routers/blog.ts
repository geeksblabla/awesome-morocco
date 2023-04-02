import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { getURLOpenGraphMetadata } from "~/server/utils/get-url-open-graph-metadata";
import { extractRssFeed } from "~/server/utils/extract-rss-feed";

export const blogRouter = createTRPCRouter({
  // public api to get all blogs (not validated by admin yet are not included)
  blogs: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.blog.findMany({
      where: {
        draft: false,
      },
    });
    return data;
  }),
  // add new blog api - requires login
  new_blog: protectedProcedure
    .input(
      z.object({
        url: z.string().url("Invalid Blog URL format"),
        rss: z.string().url("Invalid RSS URL format").optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await getURLOpenGraphMetadata(input.url);
      if (data === null) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Error getting metadata from blog url",
        });
      }
      // if rss is provided, validate it before saving it
      if (input.rss && input.rss.length > 1) {
        const feed = await extractRssFeed(input.rss);
        console.log("🚀 ~ file: blog.ts:41 ~ .mutation ~ feed:", feed);

        if (feed === null || feed?.entries === undefined) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Error getting articles from rss url",
          });
        }
        if (feed.entries.length < 2) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Feed articles count is less than 3",
          });
        }
      }

      const blog = await ctx.prisma.blog.create({
        data: {
          url: input.url,
          title: data.title,
          description: data.description || "",
          image: data.image || "/images/placeholder.png", // add placeholder image here in case
          rss: input.rss || "",
          lastRSSUpdatedAt: new Date("2000-01-01T00:00:00.000Z"), // default value :)
          draft: ctx.session.user.isAdmin ? false : true,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });

      return blog;
    }),
  // validate new blog by admin
  validate_blog: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.session.user.isAdmin) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Only admins can validate blogs",
        });
      }
      const blog = await ctx.prisma.blog.update({
        where: {
          id: input.id,
        },
        data: {
          draft: false,
        },
      });
      return blog;
    }),

  // returns all blogs created by the logged in user
  my_blogs: protectedProcedure.query(async ({ ctx }) => {
    const blogs = await ctx.prisma.blog.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    return blogs;
  }),

  // return all articles sorted by published date
  articles: publicProcedure.query(async ({ ctx }) => {
    const articles = await ctx.prisma.article.findMany({
      where: {
        title: {
          not: "",
        },
      },
      orderBy: {
        publishedAt: "desc",
      },
    });
    console.log(
      "🚀 ~ file: blog.ts:115 ~ articles:publicProcedure.query ~ articles:",
      articles
    );

    return articles;
  }),

  // get least published blog, fetch articles from rss and save it to db
  fetch_articles: protectedProcedure.query(async ({ ctx }) => {
    const blog = await ctx.prisma.blog.findFirst({
      where: {
        draft: false,
        rss: {
          not: "",
        },
      },
      orderBy: {
        lastRSSUpdatedAt: "asc",
      },
    });

    if (blog === null) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "No blog found with rss feed",
      });
    }

    const feed = await extractRssFeed(blog.rss);

    if (feed === null || feed?.entries === undefined) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Error getting articles from rss url",
      });
    }

    if (feed.entries.length < 2) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Feed articles count is less than 3",
      });
    }

    // get articles published after lastArticlePublishedAt to make sure we don't save duplicate articles
    // note that we are filtering out articles with no published date or link
    // http://localhost:3000/api/trpc/blog.fetch_articles
    const articles = feed.entries
      .map((entry) => {
        return {
          link: entry.link,
          publishedAt: entry.published,
        };
      })
      .filter(
        (article) =>
          article.publishedAt !== undefined && article.link !== undefined
      ) as { link: string; publishedAt: Date }[];

    const createdArticles = await ctx.prisma.article.createMany({
      skipDuplicates: true,
      data: articles.map((article) => {
        return {
          url: article.link,
          publishedAt: new Date(article.publishedAt),
          title: "",
          description: "",
          image: "",
          blogId: blog.id,
        };
      }),
    });
    await ctx.prisma.blog.update({
      where: {
        id: blog.id,
      },
      data: {
        lastRSSUpdatedAt: new Date(),
      },
    });

    return createdArticles;
  }),

  // go through all articles and fetch their metadata
  // http://localhost:3000/api/trpc/blog.fetch_articles_metadata
  fetch_articles_metadata: protectedProcedure.query(async ({ ctx }) => {
    const articles = await ctx.prisma.article.findMany({
      where: {
        title: "",
      },
      take: 10,
    });

    const updatedArticles = await Promise.all(
      articles.map(async (article) => {
        const data = await getURLOpenGraphMetadata(article.url);
        if (data === null) {
          return article;
        }
        const updatedArticle = await ctx.prisma.article.update({
          where: {
            id: article.id,
          },
          data: {
            title: data.title,
            description: data.description || "",
            image: data.image || "/images/placeholder.png",
          },
        });
        return updatedArticle;
      })
    );

    return updatedArticles;
  }),
});
