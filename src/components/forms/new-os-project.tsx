"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitOSProject } from "./actions/submit-os-project";
import { type FormState, initialState } from "./utils";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="ml-2 mt-4 min-w-[150px] rounded-lg bg-secondary-500/60 px-4 py-2 text-white"
    >
      {pending ? "Loading..." : "Add"}
    </button>
  );
}

export function NewOSProjectForm() {
  const [state, formAction] = useFormState<FormState, FormData>(
    submitOSProject,
    initialState,
  );
  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="url" className="font-semibold leading-none text-gray-300">
        Enter your repo url
      </label>
      <div className="mt-2 flex">
        <input
          type="text"
          id="url"
          name="url"
          required
          className=" mt-4 flex-1 rounded-lg border border-secondary-500/60 bg-secondary-500 p-3 leading-none text-gray-50 focus:border-secondary-500/100 focus:outline-none"
        />
        <SubmitButton />
      </div>
      <p aria-live="polite" className="">
        {state?.message}
      </p>
    </form>
  );
}
