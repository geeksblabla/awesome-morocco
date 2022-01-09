#!/usr/bin/env node
const fs = require("fs");

const body = process.env.BODY || "";
const labels = JSON.parse(process.env.LABELS || "") || [];

const formatKey = (key) =>
  (key || "").replace("### ", "").replace(" ", "_").toLowerCase();
const isKey = (key) =>
  (key || "").includes("### ") && !(key || "").includes("Code of Conduct");

const parseAttributes = (body) => {
  const lines = body.split("\\n\\n");
  const payload = {
    type,
    createdAt: timestamp,
  };
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (isKey(line)) {
      payload[formatKey(line)] = lines?.[index + 1];
    }
  }
  return payload;
};

const getType = (labels) => {
  if (labels.length != 2) {
    return null;
  }

  const isNew = labels.find((l) => l.name === "new");
  const type = labels.find((l) => l.name !== "new");

  if (!isNew && type) {
    return null;
  }

  return type?.name;
};

const type = getType(labels);
const timestamp = new Date().getTime();

if (!type) {
  throw new Error("Can't find the type of content");
}

const result = parseAttributes(body);

const filename = `${type}-${timestamp}.json`;
const dir = "data";
const path = `./${dir}/${filename}`;
fs.writeFileSync(path, JSON.stringify(result));

process.stdout.write(path);
