import { EMPTY_LIST_ERROR } from "../src/blog/constants";
import { feedPromise } from "../src/blog/feed-url-promise";
import { generatePostsFromRssUrls } from "../src/blog/generate-posts-from-rss-urls";
import { getErrorReporting } from "../src/blog/get-errors-reporting";

const items = [
  {
    title: "Article title",
    link: "http://example.me/article-1/",
    pubDate: "2020-01-08T13:04:30.000Z",
  },
  {
    title: "Article title 2",
    link: "http://example.me/article-2/",
    pubDate: "2020-01-09T13:04:30.000Z",
  },
];

jest.mock("../src/blog/parser", () => ({
  parseUrl: () => Promise.resolve({ title: "mock title", items }),
}));

describe("Blog posts generation from rss feeds ", () => {
  test("return error when list is empty", async () => {
    const { posts, logs } = await generatePostsFromRssUrls([]);
    expect(posts.length).toBe(0);
    expect(logs).toBe(EMPTY_LIST_ERROR);
  });

  test("reporting should return the correct message", () => {
    const logs = getErrorReporting(6, 30, [
      "Error message 1",
      "Error message 2",
    ]);
    expect(logs).toMatchSnapshot();
  });

  test("Return the correct items as posts from url ", async () => {
    const rss = await feedPromise("https://example.com/rss.xml");
    expect(rss[0].link).toBe("http://example.me/article-1/");
    expect(rss[1].link).toBe("http://example.me/article-2/");
  });

  test("Return the correct items as posts from url ", async () => {
    const { posts, logs } = await generatePostsFromRssUrls([
      "https://example.com/rss.xml",
      "https://example2.com/rss.xml",
    ]);
    expect(posts.length).toBe(4);

    expect(posts[0].link).toBe("http://example.me/article-2/");
    expect(
      posts[0].pubDate.valueOf() - posts[2].pubDate.valueOf()
    ).toBeGreaterThan(0);
  });
});
