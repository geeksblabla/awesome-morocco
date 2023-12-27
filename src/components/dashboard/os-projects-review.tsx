import { getXataClient } from "~/xata";
import { OSProjectItem } from "./os-project-item";

export default async function OSProjectsReview() {
  const repositories = await getXataClient()
    .db.os_repositories.filter({ draft: true })
    .getAll();

  return (
    <>
      <div className="pt-4">
        <h4 className="mb-5 border-b-2  border-secondary-500/30 py-5 text-xl font-semibold">
          OS Projects ( {repositories.length} ) :
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {repositories.map((repo) => {
          return <OSProjectItem key={repo.id} project={repo} />;
        })}
      </div>
    </>
  );
}
