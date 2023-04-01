import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const PODCAST_SOURCE_REGEX =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

export const podcastRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        source: z.string()
          .regex(
            PODCAST_SOURCE_REGEX,
            "Please ensure that the URL provided is a valid podcast app URL for listening to podcasts"
          ),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.podcast.create({
        data: {
          source: input.source,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },

      });
    }),
  user_podcasts: protectedProcedure.query(async ({ ctx }) => {
    const podcasts = await ctx.prisma.podcast.findMany({
      where: {
        userId: ctx.session.user.id
      }
    })
    return podcasts;
  }),
  all: publicProcedure.query(async ({ ctx }) => {
    const podcasts = await ctx.prisma.podcast.findMany()
    return podcasts;
  }),
});
