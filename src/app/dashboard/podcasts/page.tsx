import { Rule } from "~/components/dashboard/rule";
import { NewPodcastForm } from "~/components/forms/new-podcast";

export default function BlogsPage() {
  return (
    <>
      <div className="pt-4">
        <h1 className="border-b-2 border-secondary-500/30  py-5 text-2xl font-semibold">
          New Podcast
        </h1>
      </div>
      <p className="pt-8 text-lg">
        Before adding a new podcast, ensure that it meets the following
        criteria:
      </p>
      <ul className="py-2 text-base">
        <Rule>
          If you don&apos;t have a podcast website please use spotify link
        </Rule>
        <Rule>
          The podcast should have at least 3 episode on spotify to be accepted
        </Rule>
      </ul>

      <div className="mt-4">
        <NewPodcastForm />
      </div>
    </>
  );
}
