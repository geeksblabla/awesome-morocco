#!/usr/local/bin/tsm

import { writeFileSync } from "fs";

import { Label } from "./types";

import parse from ".";

import { getType } from "./utils";

const body = process.env.BODY || "";

const dir = process.env.DIR || "content/data";

const labels: Array<Label> = process.env.LABELS
  ? JSON.parse(process.env.LABELS || "")
  : [];

const type = getType(labels);

const [path, result] = parse(body, labels, dir);

writeFileSync(path, JSON.stringify({ ...result, type }, null, 2));

process.stdout.write(path);
