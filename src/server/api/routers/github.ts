import { z } from "zod";
import { Octokit } from "octokit";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { env } from "~/env.mjs";
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
      const data = await getGithubRepoMetadata({ owner, repo });

      const dataCreated = await ctx.prisma.githubRepo.create({
        data: {
          name: data.data.name,
          url: data.data.html_url,
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

  repos: protectedProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.githubRepo.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    return data;
  }),
});

const getGithubRepoMetadata = async ({
  repo,
  owner,
}: {
  repo: string;
  owner: string;
}) => {
  const octokit = new Octokit({
    auth: env.GITHUB_API_TOKEN,
  });

  const data = await octokit.request("GET /repos/{owner}/{repo}", {
    owner,
    repo,
  });

  return data;
};
