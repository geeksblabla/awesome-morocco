import { Rule } from "~/components/dashboard/rule";
import { NewOSProjectForm } from "~/components/forms/new-os-project";

export default function OpenSourcePage() {
  return (
    <>
      <div className="pt-4">
        <h1 className="border-b-2 border-secondary-500/30  py-5 text-2xl font-semibold">
          New Open Source project
        </h1>
      </div>
      <p className="pt-8 text-lg">
        Before adding a new project, ensure that it meets the following
        criteria:
      </p>
      <ul className="py-2 text-base">
        <Rule>The project must be open-source and hosted on Github.</Rule>
        <Rule>The project must have a minimum of 50 stars.</Rule>
        <Rule>
          The project should have a valid README.md file and a well-written
          description.
        </Rule>
      </ul>

      <div className="mt-4">
        <NewOSProjectForm />
      </div>
    </>
  );
}
