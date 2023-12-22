#!/usr/bin/bun

await import("../env.mjs");
import { getXataClient } from "~/xata";
import { getGithubRepoMetadata } from "~/utils/get-github-repo-metadata";
import { type Operation, logResults } from "./utils";

/**
 * This script will select the last updated repo and updates their metadata
 */
const MAX_REPO_PER_EXECUTION = 10;

type Repo = {
  id: string;
  url: string;
};

const updateRepoMetadata = async (repo: Repo): Promise<boolean> => {
  const [owner, repoName] = repo.url.split("/").slice(-2);
  if (!owner || !repoName) {
    return false;
  }

  try {
    const repoMetadata = await getGithubRepoMetadata({ repo: repoName, owner });
    if (repoMetadata === null) {
      return false;
    }

    await getXataClient().db.os_repositories.update(repo.id, {
      name: repoMetadata.data.name,
      description: repoMetadata.data.description,
      stars: repoMetadata.data.stargazers_count,
      forks: repoMetadata.data.forks_count,
      issues: repoMetadata.data.open_issues_count,
      language: repoMetadata.data.language,
      topics: repoMetadata.data.topics,
      last_update: repoMetadata.data.updated_at,
    });
    return true;
  } catch (error) {
    console.error("🚨 Error updating repo metadata", error);
    return false;
  }
};

const updateReposMetadata = async () => {
  // select repo with oldest metadata
  const repos = await getXataClient()
    .db.os_repositories.select(["url", "id"])
    .sort("xata.updatedAt", "desc")
    .getPaginated({
      pagination: { size: MAX_REPO_PER_EXECUTION },
    });

  if (repos.records.length === 0) {
    console.log("✅ No Repos");
    return;
  }

  console.log(`✅ start processing ${repos.records.length} repos`);
  const operations: Operation[] = [];
  for (const repo of repos.records) {
    const isSuccess = await updateRepoMetadata(repo as Repo);
    operations.push({
      label: repo.url ?? "No Url",
      isSuccess,
    });
  }
  console.log(`✅ finished processing ${repos.records.length} repos`);
  logResults(operations);
};

await updateReposMetadata();
