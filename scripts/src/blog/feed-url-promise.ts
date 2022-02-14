import promiseRetry from "promise-retry";
import Parser from "rss-parser";
import { Post } from "../types";
import {
  MAX_BLOG_POSTS_BY_RSS_URL,
  NO_ITEMS_ERROR,
  RSS_URL_ERROR,
} from "./constants";
import { parseUrl } from "./parser";

type RssItem = Parser.Item;
type ValidRssItem = Parser.Item & {
  title: string;
  link: string;
  pubDate: string;
};

// Retry configuration
const retryConfig = {
  retries: 2,
  factor: 1,
  minTimeout: 3 * 1000,
};
/**
 * This func generate a promise based on rssUrl that reject an error on fail and  return normalized posts on success
 * @param rssUrl
 * @returns
 */
export const feedPromise = (rssUrl: string) => {
  return new Promise<string | Post[]>((resolve, reject) => {
    promiseRetry((retry) => parseUrl(rssUrl).catch(retry), retryConfig)
      .then((data) => {
        if (!data.items) reject(NO_ITEMS_ERROR);
        else resolve(parseItemToPost(data.items));
      })
      .catch(() => reject(`${rssUrl}: ${RSS_URL_ERROR}`));
  });
};

const parseItemToPost = (items: RssItem[]) => {
  const posts = items
    .filter(isValidPost)
    .map((item) => ({
      title: item.title.trim(),
      link: item.link.trim(),
      pubDate: new Date(item.pubDate.trim()),
      image: "",
      author: "",
    }))
    .slice(0, MAX_BLOG_POSTS_BY_RSS_URL);

  return posts as Post[];
};

function isValidPost(item: RssItem): item is ValidRssItem {
  return (
    item.title !== undefined &&
    item.link !== undefined &&
    item.pubDate !== undefined
  );
}
