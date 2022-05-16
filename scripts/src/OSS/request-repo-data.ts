import axios from "axios";
import { RepoDetails } from "../types";
import {
  OSS_URL_ERROR,
} from "../constants";
const base = "https://api.github.com/repos/";
const client = axios.create({
  baseURL: base,
});
/**
 * This func generate a promise based on rssUrl that reject an error on fail and  return normalized posts on success
 * @param rssUrl
 * @returns
 */
export const getRepoDetails = (url: string) => {
  const urlArray = url.split("/");
  return new Promise<RepoDetails>((resolve, reject) => {
    client(urlArray[3] + "/" + urlArray[4])
      .then((res) => {
        if (!res) reject(`${url}: ${OSS_URL_ERROR}`);
        else resolve(res.data);
      })
      .catch(() => reject(`${url}: ${OSS_URL_ERROR}`));
  });
};



