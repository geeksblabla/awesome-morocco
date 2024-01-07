#!/usr/bin/bun

await import("../env.mjs");
import { getShowEpisodes } from "~/utils/spotify";
import { type EpisodesRecord, getXataClient } from "~/xata";

const MAX_EPISODE_PER_PODCAST = 20;
type OPError = {
  index: number;
  message: string;
};

type BulkOPerationError = {
  errors: OPError[];
};

const addBulkEpisodes = async (episodes: EpisodesRecord[]): Promise<number> => {
  // as xada doesn't support avoid adding duplicates and return an error in case of one of the episode already exists
  // we need to check the error and only add the episodes that doesn't already exists
  try {
    await getXataClient().db.episodes.create(episodes);
    return episodes.length;
  } catch (error) {
    // in case of duplication we will get an error with the episodes that already exists
    // the error should be an array of episodes that already exists
    // we need to remove them from the episodes array and try again
    const castedError = error as BulkOPerationError;
    if (
      castedError?.errors &&
      Array.isArray(castedError.errors) &&
      castedError.errors.length > 0
    ) {
      const indexes = castedError.errors.map(
        (e: { index: number; message: string }) => e.index,
      );
      const missedEpisodes = episodes.filter(
        (_, index) => !indexes.includes(index),
      );
      if (missedEpisodes.length === 0) {
        return 0;
      }
      try {
        await getXataClient().db.episodes.create(missedEpisodes);
        return missedEpisodes.length;
      } catch (error) {
        throw error;
      }
    } else {
      throw error;
    }
  }
};

const podcastFetcher = async () => {
  const podcast = await getXataClient()
    .db.podcasts.select(["spotify_url", "id"])
    .filter({ draft: false })
    .sort("last_rss_retrieved_at", "asc")
    .getFirst();

  if (!podcast || !podcast.spotify_url) {
    console.log("✅ No podcasts");
    return;
  }
  const showId = podcast.spotify_url.split("/").slice(-1)[0];
  if (!showId) {
    console.log("🚨 Invalid Spotify Link");
    return;
  }
  console.log(
    `✅ Start refetching podcast episodes for ${podcast.spotify_url}`,
  );
  const data = await getShowEpisodes(showId);
  const episodes: Partial<EpisodesRecord>[] = data
    .slice(0, MAX_EPISODE_PER_PODCAST)
    .map((episode) => {
      return {
        title: episode.name,
        published_at: new Date(
          episode.release_date ?? ("01/01/2020" as string),
        ),
        spotify_id: episode.id,
      };
    });

  console.log(
    `✅ ${episodes.length} episodes collected successfully from spotify`,
  );

  try {
    const numberOfEpisodesAdded = await addBulkEpisodes(
      episodes as EpisodesRecord[],
    );
    console.log(
      `✅ ${numberOfEpisodesAdded} episodes added to the database 🚀`,
    );
    // update the blog last_rss_retrieved_at
    await getXataClient().db.podcasts.update(podcast.id, {
      last_rss_retrieved_at: new Date(),
    });
  } catch (error) {
    console.error("🚨 Error adding episodes to the database", error);
    return;
  }
};

await podcastFetcher();
