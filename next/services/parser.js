import fs from "fs/promises";
import path from "path";
import * as matter from "gray-matter";

export const getParsedYAML = async (filename) => {
  try {
    const filePath = path.join(process.cwd(), "content", filename);
    const data = matter.read(filePath);
    return data;
  } catch (error) {
    console.error(filePath);
    return null;
  }
};
