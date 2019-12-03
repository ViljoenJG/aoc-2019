const { part1, part2 } = require("./solution");

const input1 = `R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`;

const input2 = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;

describe("Day X", () => {
  describe("Part 1", () => {
    test("test Part 1", () => {
      expect(part1(input1)).toBe(159);
      expect(part1(input2)).toBe(135);
    });
  });

  describe("Part 2", () => {
    test("test Part 2", () => {
      expect(part2(input1)).toBe(610);
      expect(part2(input2)).toBe(410);
    });
  });
});
