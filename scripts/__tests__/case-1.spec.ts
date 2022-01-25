import { formatKey, isKey, getType, parseAttributes } from "../src/utils";

describe("Utils functions", () => {
  test("Testing getType", () => {
    const labels = [
      {
        name: "new",
        color: "#fafafa",
      },
      {
        name: "project",
        color: "#fafafa",
      },
    ];

    expect(getType(labels)).toBe("project");
  });

  test("Testing formatKey", () => {
    const condidateKey = "### Project";

    expect(formatKey(condidateKey)).toBe("project");
  });

  test("Testing isKey", () => {
    const condidateKey = "### Project";
    expect(isKey(condidateKey)).toBe(true);
  });

  test("Testing parseAttributes", () => {
    const body = `### Project\\n\\nProject name\\n\\n### Description\\n\\nProject description`;

    const payload = parseAttributes(body);

    expect(Boolean(payload["project"])).toBe(true);
    expect(Boolean(payload["description"])).toBe(true);

    expect(payload).toMatchObject({
      project: "Project name",
      description: "Project description",
    });
  });
});
