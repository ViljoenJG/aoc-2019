const parseInput = input => input.split("\n").map(x => parseInt(x));

const calcFuelRequired = module => {
  const fuel = Math.floor(module / 3) - 2;
  if (fuel <= 0) return 0;
  return fuel;
};

const calcTotalFuel = (module, total = 0) => {
  if (module == 0) return total;
  const moduleFuel = calcFuelRequired(module);
  return calcTotalFuel(moduleFuel, total + moduleFuel);
};

const part1 = input =>
  parseInput(input)
    .map(x => calcFuelRequired(x))
    .reduce((a, b) => a + b);

const part2 = input =>
  parseInput(input)
    .map(x => calcTotalFuel(x))
    .reduce((a, b) => a + b);

module.exports = { part1, part2 };
