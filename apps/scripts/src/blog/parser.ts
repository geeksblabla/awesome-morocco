import Parser from "rss-parser";

const parser = new Parser();
export const parseUrl = (url: string) => {
  return parser.parseURL(url);
};
