"use client";
import { BlogCard } from "../blog-card";
import { removeBlog, validateBlog } from "../forms/actions/utils";
import { ReviewItem } from "./review-item";
import { type Blogs } from "~/xata";

export const BlogItem = ({ blog }: { blog: Blogs }) => {
  return (
    <ReviewItem
      label={blog.title ?? "No Title"}
      valueJson={JSON.stringify(blog, null, 2)}
      validate={() => validateBlog(blog.id)}
      remove={() => removeBlog(blog.id)}
      preview={<BlogCard blog={blog} />}
    />
  );
};
