import { useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";
import { Rule } from "./rule";

export const NewBlog = () => {
  const { mutate, isLoading } = api.blog.new_blog.useMutation();
  const [url, setUrl] = useState("");
  const [rss, setRss] = useState("");
  const onSubmit = () => {
    mutate(
      { url, rss },
      {
        onSuccess: () => {
          toast.success("Blog added successfully");
          setUrl("");
          setRss("");
        },
        onError: (error) => {
          const urlErrorMessage = error.data?.zodError?.fieldErrors.url;
          const rssErrorMessage = error.data?.zodError?.fieldErrors.rss;

          if (urlErrorMessage && urlErrorMessage[0]) {
            toast.error(urlErrorMessage[0]);
          } else if (rssErrorMessage && rssErrorMessage[0]) {
            toast.error(rssErrorMessage[0]);
          } else {
            toast.error("Something went wrong, please try again later");
          }
        },
      }
    );
  };
  return (
    <>
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">📝 New Blog</h1>
      </div>
      <hr className="mt-4 mb-8" />
      <p className="pb-2 text-lg text-gray-600">
        Before adding a Blog, ensure that it meets the following criteria:
      </p>
      <Rule>
        If your blog is part of your portfolio please add the exact blog
      </Rule>
      <Rule>The blog should have at least 3 blog posts to be accepted</Rule>
      <Rule>
        Make sure your blog open graph metadata is correct as we will use it to
        display your blog.
      </Rule>

      <div className="mt-4">
        <input
          type="url"
          placeholder="https://example.com"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <input
          type="url"
          placeholder="https://example.com/rss"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          value={rss}
          onChange={(e) => setRss(e.target.value)}
        />
      </div>
      <button
        onClick={onSubmit}
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        {isLoading ? "Loading..." : "Add Blog"}
      </button>
    </>
  );
};
