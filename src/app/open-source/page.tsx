import { OSProjectCard } from "~/components/os-project-card";
import { getXataClient } from "~/xata";

// ReGenerate the page every 24 hours
export const revalidate = 86400;

export default async function Page() {
  const repositories = await getXataClient()
    .db.os_repositories.filter({ draft: false })
    .sort("last_update", "desc") // sort by with repo with the newest contributions
    .getAll();

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-4">
        {repositories.map((repo) => {
          return <OSProjectCard key={repo.id} project={repo} />;
        })}
      </div>
    </>
  );
}
