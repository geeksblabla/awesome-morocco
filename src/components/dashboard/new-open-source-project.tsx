import { useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";

export const NewOpenSourceProject = () => {
  const { mutate, isLoading } = api.github.repo.useMutation();
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
          const errorMessage = error.data?.zodError?.fieldErrors.url;

          if (errorMessage && errorMessage[0]) {
            toast.error(errorMessage[0]);
          } else {
            toast.error("Something went wrong, please try again later");
          }
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
        <ul className="text-base">
          <li>* The project must be open-source and hosted on Github.</li>
          <li>* The project must have a minimum of 50 stars.</li>
          <li>
            * The project should have a valid README.md file and a well-written
            description.
          </li>
        </ul>
      </p>
      <div className="mt-4">
        <input
          type="email"
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
