import { Label } from "../types";

export const formatKey = (key: string): string =>
  (key || "").replace("### ", "").replace(" ", "_").toLowerCase();

export const isKey = (key: string) =>
  (key || "").includes("### ") && !(key || "").includes("Code of Conduct");

export const getType = (labels: Array<Label>): string | null => {
  if (labels.length != 2) {
    return null;
  }

  const isNew = labels.find((l) => l.name === "new");
  const type = labels.find((l) => l.name !== "new");

  if (!isNew && !type) {
    return null;
  }

  return type?.name;
};

export const parseAttributes = (body: string) => {
  const lines = body.split("\\n\\n");
  const payload = {
    createdAt: new Date().toISOString(),
  };
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (isKey(line)) {
      payload[formatKey(line)] = lines?.[index + 1];
    }
  }
  return payload;
};

export default {
  formatKey,
  isKey,
  getType,
};
