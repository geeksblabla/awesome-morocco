import { LanguagesTags } from "~/components/languages-tags";
import { OSProjectCard } from "~/components/os-project-card";
import { languages } from "~/utils/utils";
import { getXataClient } from "~/xata";

type Props = {
  params: { lang: (typeof languages)[number] };
};

export default async function Page({ params }: Props) {
  let repositories = [];
  if (languages.includes(params.lang)) {
    repositories = await getXataClient()
      .db.os_repositories.filter({ draft: false, language: params.lang })
      .getAll();
  } else {
    console.log("all repos");
    repositories = await getXataClient()
      .db.os_repositories.filter({ draft: false })
      .getAll();
  }

  return (
    <>
      <LanguagesTags />
      <div className="grid gap-4 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
        {repositories.map((repo) => {
          return <OSProjectCard key={repo.id} project={repo} />;
        })}
      </div>
    </>
  );
}
