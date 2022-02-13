import { Label, Payload } from "../types/github-issue";

type Post = {
  title: string;
  link: string;
  pubDate: Date;
  image?: string;
  author?: string;
};

export type { Label, Payload, Post };
