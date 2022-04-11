import path from "path";

// path constants

export const DATA_SOURCE_DIR_PATH = path.join(
  __dirname,
  "../../content/source"
);
export const DATA_GENERATED_DIR_PATH = path.join(
  __dirname,
  "../../content/generated"
);

// blog constants
export const EMPTY_LIST_ERROR = `Empty feed List, please check and try again`;
export const NO_ITEMS_ERROR = "Cannot read response->item";
export const RSS_URL_ERROR = "Rss feed Lading failed";
export const MAX_BLOG_POSTS_BY_RSS_URL = 10; // max by blog

export const BLOGS_SOURCE_DIR_PATH = `${DATA_SOURCE_DIR_PATH}/blog/`;
export const POSTS_GENERATED_DIR_FILE = `${DATA_GENERATED_DIR_PATH}/posts.json`;
export const OSS_SOURCE_DIR_PATH = `${DATA_SOURCE_DIR_PATH}/OSS/`;
export const OSS_GENERATED_DIR_FILE = `${DATA_GENERATED_DIR_PATH}/OSS.json`;
