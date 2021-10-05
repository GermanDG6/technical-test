const makeSquare = require("./emptySquare");

test("should be defined", () => {
  expect(makeSquare).toBeDefined();
});

test("should return a horizontal line", () => {
  expect(makeSquare.horizontalLines(3)).toEqual("***");
});

test("should return a vertical line", () => {
  expect(makeSquare.verticalLines(3)).toEqual("* *");
});

test("should return a empty square of a given size", () => {
  expect(makeSquare.makeSquare(3)).toEqual("***\n* *\n***");
});
