#!/usr/local/bin/tsm

import { PROJECTS_GENERATED_DIR_PATH } from "./constants";

import { Label } from "./types";

import parse from ".";

import { getType, writeToJSONFile } from "./utils";

const body = process.env.BODY || "";

const dir = process.env.DIR || PROJECTS_GENERATED_DIR_PATH;

const labels: Array<Label> = process.env.LABELS
  ? JSON.parse(process.env.LABELS || "")
  : [];

const type = getType(labels);

const [path, result] = parse(body, labels, dir);

writeToJSONFile({ ...result, type }, path);

process.stdout.write(path);
