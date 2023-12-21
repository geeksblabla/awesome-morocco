"use client";
import { useTransition } from "react";
import { removeRepo, validateRepo } from "../forms/actions/utils";

const ValidateRepo = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() => startTransition(() => validateRepo(id))}
      className="rounded-md bg-green-500 px-3 py-1 text-white"
    >
      {isPending ? "validating..." : "Validate"}
    </button>
  );
};

const RemoveRepo = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() => startTransition(() => removeRepo(id))}
      className="rounded-md bg-red-500 px-3 py-1 text-white"
    >
      {isPending ? "removing..." : "Remove"}
    </button>
  );
};
export const OSRepoActions = ({ id }: { id: string }) => {
  return (
    <div className="absolute bottom-0 right-0 flex flex-row space-x-2">
      <ValidateRepo id={id} />
      <RemoveRepo id={id} />
    </div>
  );
};
