"use client";

import { useFormState } from "react-dom";
import { type FormState, initialState } from "./utils";
import { SubmitButton } from "./submit-button";
import { submitBlog } from "./actions/submit-blog";
import React, { useEffect } from "react";
import { Alert } from "../alert";

export function NewPodcastForm() {
  const [state, formAction] = useFormState<FormState, FormData>(
    submitBlog,
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
          Podcast URL*: (Spotify link if you don&rsquo;t have a website)
        </label>

        <input
          type="text"
          id="url"
          name="url"
          required
          className=" mt-4 flex-1 rounded-lg border border-secondary-500/60 bg-secondary-500 p-3 leading-none text-gray-50 focus:border-secondary-500/100 focus:outline-none"
        />
        <label
          htmlFor="spotify"
          className="mt-4 font-semibold leading-none text-gray-300"
        >
          Spotify URL:
        </label>

        <input
          type="text"
          id="spotify"
          name="spotify"
          className=" mt-4 flex-1 rounded-lg border border-secondary-500/60 bg-secondary-500 p-3 leading-none text-gray-50 focus:border-secondary-500/100 focus:outline-none"
        />
        <SubmitButton />
      </form>
    </>
  );
}
