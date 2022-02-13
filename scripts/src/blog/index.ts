#!/usr/local/bin/tsm
import { generatePostsFromRssUrls } from "./generate-posts-from-rss-urls";
import { getRssUrlsList } from "./get-rss-urls-list";

/**
 * Read blog folder and generate a list for rss urls
 * Use generatePostsFromFeedList to generate posts and logs
 * Create a Json file with posts and log logs
 */

(async () => {
  try {
    const urls = getRssUrlsList();
    const { posts, logs } = await generatePostsFromRssUrls(urls);
    console.log(posts, logs);
  } catch (e) {
    console.error("Error generating blog posts", e);
    process.exit(1);
  }
})();
