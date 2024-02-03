"use client";
import { PodcastCard } from "../podcast-card";
import { removePodcast, validatePodcast } from "../forms/actions/utils";
import { ReviewItem } from "./review-item";
import { type Podcasts } from "~/xata";

export const PodcastItem = ({ podcast }: { podcast: Podcasts }) => {
  return (
    <ReviewItem
      label={podcast.title ?? "No Title"}
      valueJson={JSON.stringify(podcast, null, 2)}
      validate={() => validatePodcast(podcast.id)}
      remove={() => removePodcast(podcast.id)}
      preview={<PodcastCard podcast={podcast} />}
    />
  );
};
