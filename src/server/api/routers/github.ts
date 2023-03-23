import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { getTopUser } from "~/server/utils/get-top-user";
import { getGithubRepoMetadata } from "~/server/utils/get-github-repo-metadata";
const GITHUB_REPO_URL_REGEX =
  /https:\/\/github.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+/;

export const githubRouter = createTRPCRouter({
  repo: protectedProcedure
    .input(
      z.object({
        url: z
          .string()
          .regex(
            GITHUB_REPO_URL_REGEX,
            "Invalid Repo url, Please make sure the url is a valid Github repo url "
          ),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const [owner, repo] = input.url.split("/").slice(-2);
      if (!owner || !repo) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "Invalid Repo url, Please make sure the url is a valid Github repo url",
        });
      }
      const data = await getGithubRepoMetadata({ owner, repo });

      if (data.data.stargazers_count < 50) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Repo must have at least 50 stars",
        });
      }

      const dataCreated = await ctx.prisma.githubRepo.create({
        data: {
          name: data.data.name,
          url: data.data.html_url,
          description: data.data.description || "",
          language: data.data.language || "",
          topics: data.data.topics?.join(",") || "",
          stars: data.data.stargazers_count,
          issues: data.data.open_issues_count,
          forks: data.data.forks_count,
          owner: data.data.owner.login,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
      return dataCreated;
    }),

  my_repos: protectedProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.githubRepo.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    return data;
  }),
  repos: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.githubRepo.findMany();
    return data;
  }),
  top_users: publicProcedure.query(async () => {
    const users = await getTopUser();
    return users;
  }),
});
