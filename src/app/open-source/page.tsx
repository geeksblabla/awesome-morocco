import { OSProjectCard } from "~/components/os-project-card";
import { getXataClient } from "~/xata";

export default async function Page() {
  const repositories = await getXataClient()
    .db.os_repositories.filter({ draft: false })
    .getAll();

  return (
    <div className="grid gap-4 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
      {repositories.map((repo) => {
        return <OSProjectCard key={repo.id} project={repo} />;
      })}
    </div>
  );
}
