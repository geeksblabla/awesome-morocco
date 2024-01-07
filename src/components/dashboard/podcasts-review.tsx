import { getXataClient } from "~/xata";
import { PodcastItem } from "./podcast-item";

export default async function PodcastsReview() {
  const podcasts = await getXataClient()
    .db.podcasts.filter({ draft: true })
    .getAll();

  return (
    <>
      <div className="pt-4">
        <h4 className="mb-5 border-b-2  border-secondary-500/30 py-5 text-xl font-semibold">
          Podcasts ( {podcasts.length} ) :
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {podcasts.map((podcast) => {
          return <PodcastItem key={podcast.id} podcast={podcast} />;
        })}
      </div>
    </>
  );
}
