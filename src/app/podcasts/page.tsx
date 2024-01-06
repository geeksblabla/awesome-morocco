import { PodcastCard } from "~/components/podcast-card";
import { getXataClient } from "~/xata";

// ReGenerate the page every 24 hours
export const revalidate = 3600;

export default async function PodcastsPage() {
  const podcasts = await getXataClient()
    .db.podcasts.filter({ draft: false })
    .getAll();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
      {podcasts.map((podcast) => {
        return <PodcastCard key={podcast.id} podcast={podcast} />;
      })}
    </div>
  );
}
