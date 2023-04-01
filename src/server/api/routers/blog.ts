import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { getURLOpenGraphMetadata } from "~/server/utils/get-url-open-graph-metadata";

export const blogRouter = createTRPCRouter({
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

      console.log(data);

      const dataCreated = await ctx.prisma.blog.create({
        data: {
          url: input.url,
          title: data.title,
          description: data.description || "",
          image: data.image || "", // add placeholder image here in case
          rss: input.rss || "/images/placeholder.png",
          lastRSSUpdatedAt: new Date("2000-01-01T00:00:00.000Z"), // default value :)
          author: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });

      return dataCreated;
    }),
  blogs: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.blog.findMany();
    return data;
  }),
  my_blogs: protectedProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.blog.findMany({
      where: {
        authorId: ctx.session.user.id,
      },
    });
    return data;
  }),
});
