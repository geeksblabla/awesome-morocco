#!/usr/local/bin/tsm

import { writeFileSync } from "fs";

import { getType, parseAttributes } from "./utils";

const body = process.env.BODY || "";
const dir = process.env.DIR || "content/data";

const labels = process.env.LABELS ? JSON.parse(process.env.LABELS || "") : [];

if (body === "" || labels.length !== 2) {
  throw new Error("Body or Labels are empty");
}

const type = getType(labels);

if (!type) {
  throw new Error("Can't find the type of content");
}

const result = parseAttributes(body);

const { createdAt } = result;

const filename = `${type}-${createdAt}.json`;
const path = `./${dir}/${filename}`;
writeFileSync(path, JSON.stringify({ ...result, type }, null, 2));

process.stdout.write(path);
