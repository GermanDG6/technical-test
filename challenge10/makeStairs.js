const makeStairs = (size) => {
  let stairs = "";
  for (let level = 1; level <= size; level++) {
    let steps = "";
    for (let step = 1; step <= level; step++) {
      steps += "[-]";
    }
    stairs += steps + "\n";
  }
  return stairs;
};

console.log(makeStairs(9));
