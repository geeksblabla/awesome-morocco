// This script  is highly inspired: by https://github.com/gautamkrishnar/blog-post-workflow/blob/master/blog-post-workflow.js
import { EMPTY_LIST_ERROR } from "../constants";
import { feedPromise } from "./feed-url-promise";
import { isFulfilled, isRejected } from "./filters";
import { getErrorReporting } from "./get-errors-reporting";

/**
 *
 * @param rssUrls
 * @returns
 *
 * 1. Check if the rssUrls in not empty, if its the case we should return error
 * 2. Create promise to fetch and normalize rss items to post objects for every rssUrl
 * 3. Filter  settle all Promises to return data
 * 3. Based on results filters errors and sort posts
 * 4. Select the first 100 posts and  return it
 * 5. Get open graph for the first 100 article to get images and all data we need : https://github.com/jshemas/openGraphScraper
 * 6. Return logs and posts
 */

export const generatePostsFromRssUrls = async (rssUrls: string[]) => {
  if (rssUrls.length === 0) {
    return {
      posts: [],
      logs: EMPTY_LIST_ERROR,
    };
  }

  const promiseArray = rssUrls.map((rssUrl) => feedPromise(rssUrl));
  const results = await Promise.allSettled(promiseArray);

  const posts = results
    .filter(isFulfilled)
    .map((t) => t.value)
    .reduce((prev, current) => {
      return [...prev, ...current];
    }, [])
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  const errors = results.filter(isRejected).map((res) => res.reason);

  const logs = getErrorReporting(rssUrls.length, posts.length, errors);
  return { posts, logs, errors };
};
