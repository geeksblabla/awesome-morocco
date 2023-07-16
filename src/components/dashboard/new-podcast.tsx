import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";

export const NewPodcast = () => {
  const {mutate, isLoading} = api.podcast.create.useMutation();
  const [url, setUrl] = useState("");
  const [spotifyURL, setSpotifyURL] = useState("");

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(
      { 
        url,
        spotify: spotifyURL.length > 0 ? spotifyURL : undefined,
      },
      {
        onSuccess: () => {
          toast.success("Podcast added successfully");
          setUrl("");
          setSpotifyURL("");
        },
        onError: (error) => {
          const errorMessage = error.data?.zodError?.fieldErrors.source;

          if (errorMessage && errorMessage[0]) {
            toast.error(errorMessage[0]);
          } else {
            toast.error("Something went wrong, please try again later");
          }
        },
      }
    );
  }

  return (
    <div>
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">New Podcast</h1>
      </div>
      <hr className="mt-4 mb-8" />
      <form
        className="mt-4"
        onSubmit={handelSubmit}
      >
        <input
          type="url"
          placeholder="New Podcast"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
         <input
          type="url"
          placeholder="Podcast's Spotify URL"
          className="mt-4 h-12 w-full rounded-md bg-gray-100 px-3"
          value={spotifyURL}
          onChange={(e) => {
            setSpotifyURL(e.target.value);
          }}
        />
        <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">
          {isLoading ? "Loading..." : "Add Podcast"}
        </button>
      </form>
    </div>
  );
};