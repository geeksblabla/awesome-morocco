"use client";
import { removeRepo, validateRepo } from "../forms/actions/utils";
import { ReviewItem } from "./review-item";
import { type OsRepositories } from "~/xata";
import { OSProjectCard } from "../os-project-card";

export const OSProjectItem = ({ project }: { project: OsRepositories }) => {
  return (
    <ReviewItem
      label={project.name ?? "No Name"}
      valueJson={JSON.stringify(project, null, 2)}
      validate={() => validateRepo(project.id)}
      remove={() => removeRepo(project.id)}
      preview={<OSProjectCard project={project} />}
    />
  );
};
