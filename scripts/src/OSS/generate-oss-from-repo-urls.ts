// This script  is highly inspired: by https://github.com/gautamkrishnar/blog-post-workflow/blob/master/blog-post-workflow.js
import { EMPTY_LIST_ERROR } from "../constants";
import { getRepoDetails} from "./request-repo-data";
import { getErrorReporting } from "../blog/get-errors-reporting";
import { isFulfilled, isRejected } from "../blog/filters";

/**
 *
 * @param OSSUrls
 * @returns
 *
 * 1. Check if the ossUrls in not empty, if its the case we should return error
 * 2. Create promise to fetch repo details
 * 3. Return logs and posts
 */

export const generatePostsFromRepoUrls = async (repoUrls: string[]) => {
  if (repoUrls.length === 0) {
    return {
      posts: [],
      logs: EMPTY_LIST_ERROR,
    };
  }

  const promiseArray = repoUrls.map((repoUrl) => getRepoDetails(repoUrl));
  const results = await Promise.allSettled(promiseArray);
  const posts = results
    .filter(isFulfilled)
    .reduce((prev, current) => {
      return [...prev, current.value];
    }, [])
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
  const errors = results.filter(isRejected).map((res) => res.reason);

  const logs = getErrorReporting(repoUrls.length, posts.length, errors);
  return { posts, logs, errors };
};
