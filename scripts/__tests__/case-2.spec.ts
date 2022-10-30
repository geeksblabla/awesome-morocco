import parse from "../src/index";

describe("Parse functions", () => {
  test("Testing parseAttributes", () => {
    const body = `### Project\\n\\nProject name\\n\\n### Description\\n\\nProject description`;
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

    const [path, payload] = parse(body, labels, "content/data");

    expect(path).toContain("content/data");
    expect(path).toContain(".json");
    expect(Boolean(payload["project"])).toBe(true);
    expect(Boolean(payload["description"])).toBe(true);
  });
});
