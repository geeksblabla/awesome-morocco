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
              <Episode key={episode.id} episodeId={episode.spotify_id} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

const Episode = ({ episodeId }: { episodeId: string }) => {
  return (
    <iframe
      className="mx-auto  max-w-2xl"
      src={`https://open.spotify.com/embed/episode/${episodeId}?theme=0`}
      width="100%"
      height="180"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};
