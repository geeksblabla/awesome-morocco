import { useState } from "react";
import { api } from "~/utils/api";

export const NewOpenSourceProject = () => {
  const { mutate, isLoading } = api.github.repo.useMutation();
  const [url, setUrl] = useState("");
  const onSubmit = () => {
    mutate({ url });
  };
  return (
    <>
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">
          Add new open source project
        </h1>
      </div>
      <hr className="mt-4 mb-8" />
      <p className="py-2 text-xl font-semibold">Project URL </p>
      <div className="flex items-center">
        <label htmlFor="login-password">
          <div className="relative flex w-full overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input
              type="text"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="http://github.com/username/project-name"
            />
          </div>
        </label>
      </div>
      <button
        onClick={onSubmit}
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        {isLoading ? "Loading..." : "Add"}
      </button>
    </>
  );
};
