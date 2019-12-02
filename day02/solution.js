const parseInput = input => input.split(",").map(x => parseInt(x));

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const registry = {
  1: add,
  2: multiply
};

const reset = (program, noun = 12, verb = 2) => {
  const tmp = [...program];
  tmp[1] = noun;
  tmp[2] = verb;
  return tmp;
};

const computer = program => {
  let idx = 0;
  let run = true;

  while (run) {
    let [op, a, b, out] = program.slice(idx, idx + 4);

    if (op == 99) {
      run = false;
      continue;
    }

    program[out] = registry[op](program[a], program[b]);
    idx = idx + 4;
  }

  return program;
};

const part1 = input => {
  const program = reset(parseInput(input));
  return computer(program)[0];
};

const part2 = input => {
  const baseProgram = parseInput(input);

  for (let a = 1; a <= 99; a++) {
    for (let b = 1; b <= 99; b++) {
      const program = reset(baseProgram, a, b);
      const res = computer(program);

      if (program[0] === 19690720) return a * 100 + b;
    }
  }
};

module.exports = { part1, part2, computer };
