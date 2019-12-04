const { range } = require("../utilities");
const parseInput = input => input.split("-").map(x => parseInt(x));

const part1 = input => {
  const [min, max] = parseInput(input);

  let total = 0;

  for (let a of range(min, max)) {
    let password = a.toString().split("");
    let repeat = false;
    let increased = true;

    for (let b of range(0, password.length - 1)) {
      if (password[b] > password[b + 1]) increased = false;
      if (password[b] === password[b + 1]) repeat = true;
    }
    if (repeat && increased) total++;
  }

  return total;
};

const part2 = input => {
  const [min, max] = parseInput(input);

  let total = 0;

  for (let a of range(min, max)) {
    let password = a.toString().split("");
    let increased = true;
    let groups = [];
    let group = 0;
    let prev = null;
    let len = password.length;

    for (let b of range(0, len)) {
      if (password[b] > password[b + 1] && b !== len - 1) increased = false;
      if (prev) {
        if (password[b] === prev) {
          group++;
        } else {
          groups.push(group);
          group = 0;
        }
      }

      prev = password[b];
    }

    groups.push(group);

    if (groups.includes(1) && increased) total++;
  }

  return total;
};

module.exports = { part1, part2 };
