import React from "react";
import Image from "next/image";
import { getRepoDetails, RepoDetailsType } from "@/api";
type Props = {
  url: string;
};
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "gray",
  "orange",
  "cyan",
  "indigo",
  "pink",
  "amber",
];

export const RepoCard = ({ url }: Props) => {
  const [repoDetails, setRepoDetails] = React.useState<RepoDetailsType>("");
  React.useEffect(async () => {
    const data = await getRepoDetails(url);
    setRepoDetails(data);
  }, []);
  return (
    <div className="rounded w-full md:w-1/3 border-gray-400 border-solid border p-4 h-min m m-2">
      <div className="flex flex-row items-end">
        <Image src="/repo.svg" alt="repository icon" height={16} width={16} />
        <span className="leading-none ml-2 ">{repoDetails?.full_name}</span>
      </div>
      <p className="text-sm py-2 whitespace-nowrap overflow-hidden">
        {repoDetails?.description
          ? repoDetails?.description
          : " No Description"}
      </p>
      <div className="flex flex-row items-end text-sm">
        <div className="flex mr-4  items-end">
          <span className={`w-3 h-3 bg-blue-400 rounded-full`} />
          <span className="leading-none ml-2  ">{repoDetails?.language}</span>
        </div>
        <div className="flex mr-4  items-end">
          {" "}
          <Image src="/star.svg" alt="star icon" height={16} width={16} />
          <span className="leading-none ml-2">
            {" "}
            {repoDetails?.stargazers_count}
          </span>
        </div>
        <div className="flex mr-4  items-end">
          <Image src="/fork.svg" alt="star icon" height={16} width={16} />{" "}
          <span className="leading-none ml-2">{repoDetails?.forks}</span>
        </div>
      </div>
    </div>
  );
};
