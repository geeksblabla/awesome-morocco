#!/usr/local/bin/tsm
import { POSTS_GENERATED_DIR_FILE } from "../constants";
import { writeToJSONFile } from "../utils";
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
    writeToJSONFile(posts, POSTS_GENERATED_DIR_FILE);
    console.log(logs);
  } catch (e) {
    console.error("Error generating blog posts", e);
    process.exit(1);
  }
})();
