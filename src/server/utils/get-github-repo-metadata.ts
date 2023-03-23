import { Octokit } from "octokit";
import { env } from "~/env.mjs";

export const getGithubRepoMetadata = async ({
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
