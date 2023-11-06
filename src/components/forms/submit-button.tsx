"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="mt-4 min-w-[150px] rounded-lg bg-secondary-500/60 px-4 py-2 text-white"
    >
      {pending ? "Loading..." : "Add"}
    </button>
  );
}
