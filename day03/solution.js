const { range } = require("../utilities");

const parseInput = input => input.split("\n").map(x => x.split(","));

const pointsInPath = paths => {
  const points = {};
  let x = 0;
  let y = 0;
  let totalLength = 0;

  const dx = { U: 0, D: 0, R: 1, L: -1 };
  const dy = { U: -1, D: 1, R: 0, L: 0 };

  for (let path of paths) {
    const direction = path[0];
    const distance = parseInt(path.slice(1));

    for (let i of range(0, distance)) {
      x += dx[direction];
      y += dy[direction];
      totalLength += 1;

      const key = `${x},${y}`;
      if (!points[key]) {
        points[key] = totalLength;
      }
    }
  }

  return points;
};

const getIntersections = (p1, p2) =>
  Object.keys(p1).reduce((a, b) => {
    if (p2[b]) a.push(b);
    return a;
  }, []);

const part1 = input => {
  const paths = parseInput(input);
  const p1Path = pointsInPath(paths[0]);
  const p2Path = pointsInPath(paths[1]);
  const intersections = getIntersections(p1Path, p2Path);

  return Math.min(
    ...intersections.map(x =>
      x
        .split(",")
        .map(y => parseInt(y))
        .reduce((a, b) => {
          return Math.abs(a) + Math.abs(b);
        })
    )
  );
};

const part2 = input => {
  const paths = parseInput(input);
  const p1Path = pointsInPath(paths[0]);
  const p2Path = pointsInPath(paths[1]);
  const intersections = getIntersections(p1Path, p2Path);
  return Math.min(...intersections.map(x => p1Path[x] + p2Path[x]));
};

module.exports = { part1, part2 };
