import { RssItem, ValidRssItem } from "../types";

export function isValidPost(item: RssItem): item is ValidRssItem {
  return (
    item.title !== undefined &&
    item.link !== undefined &&
    item.pubDate !== undefined
  );
}

export function isFulfilled<T>(
  res: PromiseSettledResult<T>
): res is PromiseFulfilledResult<T> {
  return res.status === "fulfilled" && typeof res.value !== "string";
}
export function isRejected(
  res: PromiseSettledResult<unknown[]>
): res is Omit<PromiseRejectedResult, "reason"> & { reason: string } {
  return res.status === "rejected" && typeof res.reason === "string";
}
