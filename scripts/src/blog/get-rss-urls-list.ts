//TODO: migrate this function to read urls from 'data/blog'

import fs from "fs";
import { BLOGS_SOURCE_DIR_PATH } from "../constants";

export const getRssUrlsList = () => {
  try {
    const files: string[] = fs.readdirSync(BLOGS_SOURCE_DIR_PATH);
    const urls: string[] = files
      .map((file) =>
        JSON.parse(fs.readFileSync(`${BLOGS_SOURCE_DIR_PATH}/${file}`, "utf8"))
      )
      .map((item) => item.rssUrl);

    return urls;
  } catch (err) {
    throw new Error("Error extracting urls from blog/data");
  }
};
