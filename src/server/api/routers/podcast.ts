import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { getURLOpenGraphMetadata } from "~/server/utils/get-url-open-graph-metadata";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const PODCAST_URL_REGEX =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

export const podcastRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        url: z.string()
          .regex(
            PODCAST_URL_REGEX,
            "Please ensure that the URL provided is a valid podcast app URL for listening to podcasts"
          ),
        spotify: z.string().url("Invalid spotify URL format").optional()
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await getURLOpenGraphMetadata(input.url);
      if (data === null) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Error getting metadata from podcast url",
        });
      }
      return ctx.prisma.podcast.create({
        data: {
          url: input.url,
          spotify: input.spotify || "",
          title: data.title,
          description: data.description || "",
          image: data.image || "/images/placeholder.png",
          draft: ctx.session.user.isAdmin ? false : true,
          updatedAt: new Date("2000-01-01T00:00:00.000Z"), // default value :)
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
