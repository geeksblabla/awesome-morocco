import { POSTS_GENERATED_DIR_FILE } from "../constants";
import { writeToJSONFile } from "../utils";
import { generatePostsFromRepoUrls } from "./generate-oss-from-repo-urls";
import { getOssUrlsList } from "./get-oss-urls-list";
const POSTS_PER_FILE = 2;
/**
 * Read OSS folder and generate a list for repo urls
 * Use generatePostsFromRepoList to generate posts and logs
 * Create a Json file with posts and log logs
 */

(async () => {
  try {
    const urls = getOssUrlsList();
    const quo = Math.floor(urls.length / POSTS_PER_FILE);
    const rem = urls.length / POSTS_PER_FILE;
    const { posts, logs } = await generatePostsFromRepoUrls(urls);
    // paginate data
    for (let i = 0; i < quo; i++) {
      writeToJSONFile(
        posts.slice(i * POSTS_PER_FILE, (i + 1) * POSTS_PER_FILE),
        POSTS_GENERATED_DIR_FILE(i)
      );
    }
    if (rem > 0) {
      writeToJSONFile(
        posts.slice(quo * POSTS_PER_FILE),
        POSTS_GENERATED_DIR_FILE(quo)
      );
    }
  } catch (e) {
    console.error("Error generating blog posts", e);
    process.exit(1);
  }
})();
