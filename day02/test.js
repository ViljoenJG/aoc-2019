const { computer, part1, part2 } = require("./solution");

describe("Day 2", () => {
  describe("Part 1", () => {
    test("test Part 1", () => {
      const input = "1,9,10,3,2,3,11,0,99,30,40,50"
        .split(",")
        .map(x => parseInt(x));

      expect(computer(input)[0]).toBe(3500);
    });
  });
});
