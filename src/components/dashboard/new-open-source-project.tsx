import { useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";
import { Rule } from "./rule";
import { ServerError, showErrorToast } from "./show-error-toast";

export const NewOpenSourceProject = () => {
  const { mutate, isLoading } = api.github.new_repo.useMutation();
  const [url, setUrl] = useState("");
  const onSubmit = () => {
    mutate(
      { url },
      {
        onSuccess: () => {
          toast.success("Project added successfully");
          setUrl("");
        },
        onError: (error) => {
          showErrorToast(error as ServerError);
        },
      }
    );
  };
  return (
    <>
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">New Open Source project</h1>
      </div>
      <hr className="mt-4 mb-8" />
      <p className="text-lg text-gray-600">
        Before adding a new project, ensure that it meets the following
        criteria:
      </p>
      <ul className="text-base">
        <Rule>The project must be open-source and hosted on Github.</Rule>
        <Rule>The project must have a minimum of 50 stars.</Rule>
        <Rule>
          The project should have a valid README.md file and a well-written
          description.
        </Rule>
      </ul>

      <div className="mt-4">
        <input
          type="url"
          placeholder="https://github.com/user/repo"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button
        onClick={onSubmit}
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        {isLoading ? "Loading..." : "Add Project"}
      </button>
    </>
  );
};
