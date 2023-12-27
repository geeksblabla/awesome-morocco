import { SpotifyEpisodeIframe } from "~/components/spotify-episode-iframe";
import { getXataClient } from "~/xata";

// ReGenerate the page every 24 hours
export const revalidate = 86400;

export default async function RadioPage() {
  const episodes = await getXataClient()
    .db.episodes.sort("published_at", "desc")
    .getAll();
  return (
    <div className="mx-auto w-full">
      <div className="grid grid-cols-1 gap-4">
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
