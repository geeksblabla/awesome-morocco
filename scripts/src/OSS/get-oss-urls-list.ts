
import fs from "fs";
import { OSS_SOURCE_DIR_PATH } from "../constants";

export const getOssUrlsList = () => {
  try {
    const files: string[] = fs.readdirSync(OSS_SOURCE_DIR_PATH);
    const urls: string[] = files
      .map((file) =>
        JSON.parse(fs.readFileSync(`${OSS_SOURCE_DIR_PATH}/${file}`, "utf8"))
      )
      .map((item) => item.repoUrl);

    return urls;
  } catch (err) {
    throw new Error("Error extracting urls from OSS/data");
  }
};
