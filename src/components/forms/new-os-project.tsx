"use client";

import { useFormState } from "react-dom";
import { submitOSProject } from "./actions/submit-os-project";
import { type FormState, initialState } from "./utils";
import { SubmitButton } from "./submit-button";
import { Alert } from "../alert";
import React, { useEffect } from "react";

export function NewOSProjectForm() {
  const [state, formAction] = useFormState<FormState, FormData>(
    submitOSProject,
    initialState,
  );

  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.status === "success") {
      formRef.current?.reset();
    }
  }, [state?.status]);

  return (
    <>
      {state.status === "idle" ? null : (
        <Alert description={state.message} type={state.status} />
      )}

      <form action={formAction} className="flex flex-col" ref={formRef}>
        <label
          htmlFor="url"
          className="font-semibold leading-none text-gray-300"
        >
          Repo URL*:
        </label>
        <div className="flex">
          <input
            type="text"
            id="url"
            name="url"
            required
            className=" mr-4 mt-4 flex-1 rounded-lg border border-secondary-500/60 bg-secondary-500 p-3 leading-none text-gray-50 focus:border-secondary-500/100 focus:outline-none"
          />
          <SubmitButton />
        </div>
      </form>
    </>
  );
}
