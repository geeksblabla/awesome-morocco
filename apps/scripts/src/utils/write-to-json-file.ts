import { writeFileSync } from "fs";

export const writeToJSONFile = (json: object, path: string) => {
  writeFileSync(path, JSON.stringify(json, null, 2));
};
