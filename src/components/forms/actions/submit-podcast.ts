"use server";

import { z } from "zod";
import { getXataClient } from "~/xata";
import { createErrorState, createSuccessState, type FormState } from "../utils";
import { currentUser } from "@clerk/nextjs";
import { getURLOpenGraphMetadata } from "~/utils/get-url-open-graph-metadata";
import { getShow } from "~/utils/spotify";

const new_podcast_schema = z.object({
  url: z
    .string({ required_error: "Podcast url is required" })
    .url("Invalid Podcast URL format"),
  spotify_url: z
    .string()
    .url("Invalid Spotify Link")
    .startsWith("https://open.spotify.com/show/", "Invalid Spotify Link"),
});

export async function submitPodcast(prevState: FormState, formData: FormData) {
  try {
    const user = await currentUser();
    if (!user) {
      return createErrorState("You must be logged in to submit a blog");
    }

    const parsed = new_podcast_schema.safeParse({
      url: formData.get("url"),
      spotify_url: formData.get("spotify_url") ?? "",
    });

    if (!parsed.success) {
      const error = parsed.error.message;
      return createErrorState(`Invalid Submission: ${error ?? ""}`);
    }

    const url_metadata = await getURLOpenGraphMetadata(parsed.data.url);
    if (!url_metadata) {
      return createErrorState("Cant load podcast metadata, please try again");
    }

    // Check if the podcast have already more that 3 episodes
    const showId = parsed.data.spotify_url.split("/").slice(-1)[0];
    if (!showId) {
      return createErrorState("Invalid Spotify Link");
    }

    const show = await getShow(showId);
    if (show?.total_episodes < 3) {
      return createErrorState(
        "Podcast must have more than 3 episodes to be accepted",
      );
    }

    await getXataClient().db.podcasts.create({
      title: url_metadata.ogTitle,
      description: url_metadata.ogDescription,
      url: url_metadata.requestUrl,
      image: url_metadata.ogImage?.[0]?.url,
      spotify_url: parsed.data.spotify_url,
      last_rss_retrieved_at: new Date("2000-01-01T00:00:00.000Z"),
      draft: true,
      total_episodes: show.total_episodes,
      submitted_by: user.id,
    });
    return createSuccessState("Podcast added successfully");
  } catch (e) {
    return createErrorState("Failed to add your podcast, please try again");
  }
}
