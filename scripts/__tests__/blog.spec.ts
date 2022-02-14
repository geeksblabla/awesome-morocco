import {
  EMPTY_LIST_ERROR,
  NO_ITEMS_ERROR,
  RSS_URL_ERROR,
} from "../src/blog/constants";
import { feedPromise } from "../src/blog/feed-url-promise";
import { generatePostsFromRssUrls } from "../src/blog/generate-posts-from-rss-urls";
import { getErrorReporting } from "../src/blog/get-errors-reporting";

const BLOG_1 = {
  title: "blog 1",
  link: "http://blog1.me/",
  items: [
    {
      title: "Blog 1 Article title ",
      link: "http://blog1.me/article-1/",
      pubDate: "2020-01-08T13:04:30.000Z",
    },
    {
      title: "Blog 1 Article title 2",
      link: "http://blog1.me/article-2/",
      pubDate: "2020-01-09T13:04:30.000Z",
    },
  ],
};

const BLOG_2 = {
  title: "blog 2",
  link: "http://blog2.me/",
  items: [
    {
      title: "Blog 2  Article title 1",
      link: "http://blog2.me/article-1/",
      pubDate: "2020-01-10T13:04:30.000Z",
    },
    {
      title: "Blog 2 Article title 2",
      link: "http://blog2.me/article-2/",
      pubDate: "2020-01-12T13:04:30.000Z",
    },
  ],
};

const NO_ITEMS_BLOG = {
  title: "No Items Blog",
  link: "http://no-items-blog.me/",
};

jest.mock("../src/blog/parser", () => ({
  parseUrl: (url: string) => {
    const blog = [BLOG_1, BLOG_2, NO_ITEMS_BLOG].find(
      (blog) => blog.link === url
    );
    if (blog !== undefined) return Promise.resolve(blog);
    else throw new Error("error!");
  },
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
    const rss = await feedPromise(BLOG_1.link);
    expect(rss[0].link).toBe(BLOG_1.items[0].link);
    expect(rss[1].link).toBe(BLOG_1.items[1].link);
  });

  test("should return errors for no items rss", async () => {
    await expect(feedPromise(NO_ITEMS_BLOG.link)).rejects.toBe(NO_ITEMS_ERROR);
  });

  test("should return error for invalid rss links", async () => {
    const invalidURL = "https://myinvalidlink.com/";
    await expect(feedPromise(invalidURL)).rejects.toBe(
      `${invalidURL}: ${RSS_URL_ERROR}`
    );
  });

  test("Return the correct items as posts from url ", async () => {
    const { posts } = await generatePostsFromRssUrls([
      BLOG_1.link,
      BLOG_2.link,
    ]);
    expect(posts.length).toBe(4);
    expect(posts[0].link).toBe(BLOG_2.items[1].link);
    expect(
      posts[0].pubDate.valueOf() - posts[1].pubDate.valueOf()
    ).toBeGreaterThan(0);
  });

  test("return  valid posts and correct errors  for real use cases", async () => {
    const invalidURL = "https://myinvalidlink.com/";
    const { posts, errors } = await generatePostsFromRssUrls([
      BLOG_1.link,
      BLOG_2.link,
      invalidURL,
    ]);
    expect(posts.length).toBe(4);
    expect(errors.length).toBe(1);
    expect(errors[0]).toBe(`❌ ${invalidURL}: ${RSS_URL_ERROR}`);
  });
});
