import path from "path";

// blog constants
export const EMPTY_LIST_ERROR = `Empty feed List, please check and try again`;
export const NO_ITEMS_ERROR = "Cannot read response->item";
export const RSS_URL_ERROR = "Rss feed Lading failed";
export const MAX_BLOG_POSTS_BY_RSS_URL = 10; // max by blog

export const BLOGS_DIR_PATH = path.join(__dirname, "../../content/data/blog/");
