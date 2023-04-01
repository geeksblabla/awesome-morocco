import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { getURLOpenGraphMetadata } from "~/server/utils/get-url-open-graph-metadata";

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
        url: z.string().url(),
        rss: z.union([z.string().url().optional(), z.string().optional()]),
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

      const blog = await ctx.prisma.blog.create({
        data: {
          url: input.url,
          title: data.title,
          description: data.description || "",
          image: data.image || "/images/placeholder.png", // add placeholder image here in case
          rss: input.rss || "",
          lastRSSUpdatedAt: new Date("2000-01-01T00:00:00.000Z"), // default value :)
          lastArticlePublishedAt: new Date("2000-01-01T00:00:00.000Z"), // default value :)
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
});
