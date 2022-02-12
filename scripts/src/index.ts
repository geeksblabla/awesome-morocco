import { Label } from "./types";
import { parseAttributes, getType } from "./utils";

export default function parse(
  body: string,
  labels: Array<Label>,
  dir: string
): Array<any> {
  if (body === "" || labels.length !== 2) {
    throw new Error("Body or Labels are empty");
  }

  if (!labels) {
    throw new Error("Can't find the type of content");
  }

  const result = parseAttributes(body);

  const type = getType(labels);

  const { createdAt } = result;

  const filename = `${type}-${createdAt}.json`;
  const path = `./${dir}/${filename}`;

  return [path, result];
}
