const lernaGetPackages = require(".");

expect.addSnapshotSerializer({
  test: value =>
    typeof value === "string" &&
    (value.indexOf("\\") > -1 || value.indexOf(process.cwd()) > -1),
  print: (value, serializer) =>
    serializer(value.replace(process.cwd(), "<cwd>").replace(/\\/g, "/"))
});

describe("lernaGetPackages()", () => {
  test("matches snapshot", () => {
    const packages = lernaGetPackages(__dirname + "/fixture");
    expect(packages).toMatchSnapshot();
  });

  test("returns empty array if no packages", () => {
    expect(lernaGetPackages(__dirname)).toEqual([]);
  });

  test("returns empty array if path doesn't exist", () => {
    expect(lernaGetPackages("/blargh")).toEqual([]);
  });
});
