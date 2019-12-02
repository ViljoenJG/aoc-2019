const parseInput = input => input.split("\n").map(x => parseInt(x));

const calcFuelRequired = module => Math.floor(module / 3) - 2;
const calcTotalModuleFuel = module => {
  let total = 0;
  let tmp = module;

  while (tmp > 0) {
    const fuel = calcFuelRequired(tmp);

    if (fuel <= 0) {
      tmp = 0;
      return total;
    }

    tmp = fuel;
    total += fuel;
  }

  return total;
};

const part1 = input =>
  parseInput(input)
    .map(x => calcFuelRequired(x))
    .reduce((a, b) => a + b);

const part2 = input =>
  parseInput(input)
    .map(x => calcTotalModuleFuel(x))
    .reduce((a, b) => a + b);

module.exports = { part1, part2 };
