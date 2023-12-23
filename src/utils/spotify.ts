import { env } from "~/env.mjs";

type SpotifyToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

let access_token: string | null = null;

const getAccessToken = async () => {
  if (access_token) {
    return access_token;
  }
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${env.SPOTIFY_CLIENT_ID}&client_secret=${env.SPOTIFY_CLIENT_SECRET}`,
  });
  const data = (await response.json()) as SpotifyToken;
  access_token = data.access_token;
  return access_token;
};

type SpotifyShow = {
  total_episodes: number;
  name: string;
  description: string;
};

export const getShow = async (showId: string) => {
  const token = await getAccessToken();
  const response = await fetch(`https://api.spotify.com/v1/shows/${showId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = (await response.json()) as SpotifyShow;
  return data;
};

type SpotifyEpisode = {
  name: string;
  id: string;
  release_date: string;
};

export const getShowEpisodes = async (showId: string) => {
  const token = await getAccessToken();
  const response = await fetch(
    `https://api.spotify.com/v1/shows/${showId}/episodes`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = (await response.json()) as { items: SpotifyEpisode[] };
  return data.items.map((episode) => ({
    name: episode.name,
    id: episode.id,
    release_date: episode.release_date,
  }));
};
