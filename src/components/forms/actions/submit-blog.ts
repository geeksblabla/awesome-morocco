"use server";

import { z } from "zod";
import { getXataClient } from "~/xata";
import { createErrorState, createSuccessState, type FormState } from "../utils";
import { currentUser } from "@clerk/nextjs";
import { getURLOpenGraphMetadata } from "~/utils/get-url-open-graph-metadata";
import { extractRssFeed } from "~/utils/extract-rss-feed";

const new_blog_schema = z.object({
  url: z.string().url("Invalid Blog URL format"),
  rss: z.union([z.string().url("Invalid RSS URL format"), z.literal("")]),
});

export async function submitBlog(prevState: FormState, formData: FormData) {
  try {
    const user = await currentUser();
    if (!user) {
      return createErrorState("You must be logged in to submit a blog");
    }

    const parsed = new_blog_schema.safeParse({
      url: formData.get("url"),
      rss: formData.get("rss") ?? "",
    });

    if (!parsed.success) {
      return createErrorState("Invalid url: we only accept blog urls");
    }

    const url_metadata = await getURLOpenGraphMetadata(parsed.data.url);
    if (!url_metadata) {
      return createErrorState("Cant load blog metadata, please try again");
    }

    // if rss is provided, validate it before saving it
    if (parsed.data.rss && parsed.data.rss.length > 1) {
      const feed = await extractRssFeed(parsed.data.rss);
      console.log("🚀 ~ file: blog.ts:41 ~ .mutation ~ feed:", feed);

      if (feed?.entries === undefined) {
        return createErrorState("Invalid RSS feed or feed is empty");
      }
      if (feed?.entries.length < 4) {
        return createErrorState(
          "RSS feed must have more than 3 blog post to be accepted",
        );
      }
    }

    await getXataClient().db.blogs.create({
      title: url_metadata.ogTitle,
      description: url_metadata.ogDescription,
      url: url_metadata.requestUrl,
      image: url_metadata.ogImage?.[0]?.url,
      rss: parsed.data.rss ?? null,
      last_rss_retrieved_at: new Date("2000-01-01T00:00:00.000Z"),
      draft: user.privateMetadata?.isAdmin ? false : true,
      submitted_by: user.id,
    });
    return createSuccessState("Blog added successfully");
  } catch (e) {
    console.log("🚀 ~ file: blog.ts:41 ~ .mutation ~ e", e);
    return createErrorState("Failed to add your blog, please try again");
  }
}
