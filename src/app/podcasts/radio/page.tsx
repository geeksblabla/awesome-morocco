import { SpotifyEpisodeIframe } from "~/components/spotify-episode-iframe";
import { getXataClient } from "~/xata";

// ReGenerate the page every 24 hours
export const revalidate = 3600;

export default async function RadioPage() {
  const episodes = await getXataClient()
    .db.episodes.sort("published_at", "desc")
    .getMany({ pagination: { size: 50 } });
  return (
    <div className="mx-auto w-full">
      <div className="grid gap-3 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-4">
        {episodes.map((episode) => (
          <>
            {episode.spotify_id && (
              <SpotifyEpisodeIframe
                key={episode.id}
                episodeId={episode.spotify_id}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
