import Parser from "rss-parser";

export type Post = {
  title: string;
  link: string;
  pubDate: Date;
  image?: string;
  author?: string;
};

export type RssItem = Parser.Item;
export type ValidRssItem = Parser.Item & {
  title: string;
  link: string;
  pubDate: string;
};
