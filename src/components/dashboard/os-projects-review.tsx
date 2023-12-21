import { OSRepoActions } from "./os-project-actions";
import { OSProjectCard } from "~/components/os-project-card";
import { getXataClient } from "~/xata";

export default async function OSProjectsReview() {
  const repositories = await getXataClient()
    .db.os_repositories.filter({ draft: true })
    .getAll();

  return (
    <>
      <div className="pt-4">
        <h1 className="mb-5 border-b-2  border-secondary-500/30 py-5 text-2xl font-semibold">
          OS Projects Need Review ( {repositories.length} ) :
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {repositories.map((repo) => {
          return (
            <div key={repo.id} className="relative">
              <OSRepoActions id={repo.id} />
              <OSProjectCard project={repo} />
            </div>
          );
        })}
      </div>
    </>
  );
}
