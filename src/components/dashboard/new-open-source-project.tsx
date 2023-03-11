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
        },
        onError: (error) => {
          console.log(error.data?.zodError);

          if (error.data?.zodError) {
            toast.error(error.data?.zodError?.fieldErrors?.["url"][0]);
          }
        },
      }
    );
  };
  return (
    <>
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">
          Add new open source project
        </h1>
      </div>
      <hr className="mt-4 mb-8" />
      <div>
        <label className=""> Open source project url</label>
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
        {isLoading ? "Loading..." : "Add"}
      </button>
    </>
  );
};
