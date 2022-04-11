import { POSTS_GENERATED_DIR_FILE } from "../constants";
import { writeToJSONFile } from "../utils";
import { generatePostsFromRepoUrls } from "./generate-oss-from-repo-urls";
import { getOssUrlsList } from "./get-oss-urls-list";

/**
 * Read OSS folder and generate a list for repo urls
 * Use generatePostsFromRepoList to generate posts and logs
 * Create a Json file with posts and log logs
 */

(async () => {
  try {
    const urls = getOssUrlsList();
    const { posts, logs } = await generatePostsFromRepoUrls(urls);
    writeToJSONFile(posts, POSTS_GENERATED_DIR_FILE);
    console.log(logs);
  } catch (e) {
    console.error("Error generating blog posts", e);
    process.exit(1);
  }
})();
