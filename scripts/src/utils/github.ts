import { Label, Payload } from "../types";

export const formatKey = (key: string): string =>
  (key || "").replace("### ", "").replace(" ", "_").toLowerCase();

export const isKey = (key: string) =>
  (key || "").includes("### ") && !(key || "").includes("Code of Conduct");

export const getType = (labels: Array<Label>): string => {
  if (labels.length != 2) {
    throw new Error("Labels are empty");
  }

  const isNew = labels.find((l) => l.name === "new");
  const type = labels.find((l) => l.name !== "new");

  if (!isNew || !type || !type.name) {
    throw new Error("An error error occurred ");
  }

  return type?.name;
};

export const parseAttributes = (body: string) => {
  // TODO: make the separator a function  parameter
  const lines = body.split("\\n\\n");
  const payload: Payload = {
    createdAt: new Date().toISOString(),
  };
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const key: string = formatKey(line);
    if (isKey(line)) {
      payload[key] = lines?.[index + 1];
    }
  }
  return payload;
};

export default {
  formatKey,
  isKey,
  getType,
};
