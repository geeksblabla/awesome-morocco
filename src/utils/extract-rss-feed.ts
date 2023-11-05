import { extract } from "@extractus/feed-extractor";

export async function extractRssFeed(url: string) {
  try {
    const feed = await extract(url);
    return feed;
  } catch (error) {
    console.log(error);
    return null;
  }
}
