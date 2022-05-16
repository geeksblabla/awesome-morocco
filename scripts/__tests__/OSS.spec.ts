
  import { getRepoDetails } from "../src/OSS/request-repo-data";
  import {
    EMPTY_LIST_ERROR,
    OSS_URL_ERROR,
  } from "../src/constants";
  import { generatePostsFromRepoUrls } from "../src/OSS/generate-oss-from-repo-urls"
  import { getErrorReporting } from "../src/blog/get-errors-reporting";
  
  const OSS_1 = {
    "name": "reactjs-popup",
    "repoUrl": "https://github.com/yjose/reactjs-popup",
    "description": "a simple React popup component that help you create simple and complex Modals, Tooltips and Menus for your next React App.",
    "author": "Youssouf EL Azizi"
  }
  
  const OSS_2 = {
    "name": "redux-saga",
    "repoUrl": "https://github.com/redux-saga/redux-saga",
    "description": "An alternative side effect model for Redux apps",
    "author": "Yassine Elouafi"
  }
  
  const NO_ITEMS_BLOG = {
    title: "No Items Blog",
    link: "http://no-items-blog.me/",
  };
  
  jest.mock("../src/OSS/get-oss-urls-list.ts", () => ({
    getOssUrlsList: () => {
      return ["https://github.com/yjose/reactjs-popup", "https://github.com/redux-saga/redux-saga"];
    },
  }));
  describe("Generating OSS posts from repo URL", () => {
    test("return error when list is empty", async () => {
      const { posts, logs } = await generatePostsFromRepoUrls([]);
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
  
    test("Return the correct data from github api", async () => {
        const res = await getRepoDetails(OSS_1.repoUrl);
      expect(res.name).toBe(OSS_1.name);
   
    });
  
  
    test("should return error for invalid repo links", async () => {
        const invalidURL = "https://github.com/invalid/invalid";
        expect(getRepoDetails(invalidURL)).rejects.toBe(`${invalidURL}: ${OSS_URL_ERROR}`);
    });
  
    test("Return the correct items as posts from url ", async () => {
      const { posts } = await generatePostsFromRepoUrls([
        OSS_1.repoUrl,
        OSS_2.repoUrl
      ]);
      expect(posts.length).toBe(2);

    
    });
  
    test("return  valid posts and correct errors  for real use cases", async () => {
      const invalidURL = "https://github.com/invalid/invalid/";
      const { posts, errors } = await generatePostsFromRepoUrls([
        OSS_1.repoUrl,
        OSS_2.repoUrl,
        invalidURL,
      ]);
      expect(posts.length).toBe(2);
      console.log(errors);
      expect(errors.length).toBe(1);
      expect(errors[0]).toBe(`${invalidURL}: ${OSS_URL_ERROR}`);
    });
  });
  