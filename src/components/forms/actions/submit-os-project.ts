"use server";

import { z } from "zod";
import { getXataClient } from "~/xata";
import { getGithubRepoMetadata } from "~/utils/get-github-repo-metadata";
import { createErrorState, createSuccessState, type FormState } from "../utils";
import { currentUser } from "@clerk/nextjs";

const GITHUB_REPO_URL_REGEX =
  /https:\/\/github.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+/;
const new_os_project_schema = z.object({
  url: z
    .string()
    .regex(
      GITHUB_REPO_URL_REGEX,
      "Invalid Repo url, Please make sure the url is a valid Github repo url ",
    ),
});

export async function submitOSProject(
  prevState: FormState,
  formData: FormData,
) {
  try {
    const user = await currentUser();
    if (!user) {
      return createErrorState("You must be logged in to submit a project");
    }
    const parsed = new_os_project_schema.safeParse({
      url: formData.get("url"),
    });
    if (!parsed.success) {
      return createErrorState("Invalid Repo url: we only accept github repos");
    }

    const [owner, repo] = parsed.data.url.split("/").slice(-2);

    if (!owner || !repo) {
      return createErrorState(
        "Invalid Repo url, Make sure the url is valid repo url",
      );
    }
    const data = await getGithubRepoMetadata({ owner, repo });

    if (data.data.stargazers_count < 50) {
      return createErrorState("Repo must have at least 50 stars");
    }
    await getXataClient().db.os_repositories.create({
      name: data.data.name,
      description: data.data.description,
      url: data.data.html_url,
      owner: data.data.owner.login,
      stars: data.data.stargazers_count,
      forks: data.data.forks_count,
      issues: data.data.open_issues_count,
      language: data.data.language,
      topics: data.data.topics,
      draft: user.privateMetadata?.role === "admin" ? false : true,
      submitted_by: user.id,
      last_update: data.data.updated_at,
    });
    return createSuccessState("Repo added successfully");
  } catch (e) {
    return createErrorState("Failed to add your repo, please try again");
  }
}
