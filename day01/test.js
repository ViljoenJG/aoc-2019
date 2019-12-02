const { part1, part2 } = require("./solution");

describe("Day 1", () => {
  describe("Part 1", () => {
    test("test Part 1", () => {
      expect(part1("12")).toBe(2);
      expect(part1("14")).toBe(2);
      expect(part1("1969")).toBe(654);
      expect(part1("100756")).toBe(33583);
    });
  });

  describe("Part 2", () => {
    test("test Part 2", () => {
      expect(part2("12")).toBe(2);
      expect(part2("14")).toBe(2);
      expect(part2("1969")).toBe(966);
      expect(part2("100756")).toBe(50346);
    });
  });
});
