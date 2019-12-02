const fs = require("fs");
const path = require("path");

const dayArg = process.argv[2] || "1";
const day = dayArg.padStart(2, "0");

const input = fs
  .readFileSync(path.join(__dirname, `day${day}`, "input.txt"), {
    encoding: "utf-8"
  })
  .trim();

const { part1, part2 } = require(`./day${day}/solution`);

const solution1 = part1(input);
console.log(solution1);

const solution2 = part2(input);
console.log(solution2);
