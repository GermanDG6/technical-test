const horizontalLines = (size) => {
  let horizontal = "";
  for (let i = 0; i < size; i++) {
    horizontal += "*";
  }
  return horizontal;
};

const verticalLines = (size) => {
  let vertical = "";
  for (let i = 0; i <= size; i++) {
    vertical.length === 0
      ? (vertical += "*")
      : vertical.length === size - 1
      ? (vertical += "*")
      : vertical.length > 0
      ? (vertical += " ")
      : vertical;
  }
  return vertical;
};

const makeSquare = (size) => {
  let square = "";
  square += horizontalLines(size) + "\n";
  for (let i = 1; i <= size - 2; i++) {
    square += verticalLines(size) + "\n";
  }
  square += horizontalLines(size);
  return square;
};

console.log(makeSquare(3));
