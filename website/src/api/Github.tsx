import axios from "axios";
const base = "https://api.github.com/repos/";
const client = axios.create({
  baseURL: base,
});
export const getRepoDetails = async (url: string) => {
  const urlArray = url.split("/");
  const { data } = await client(urlArray[3] + "/" + urlArray[4]);
  return data;
};
