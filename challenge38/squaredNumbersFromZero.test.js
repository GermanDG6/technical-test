const squaredNumbersFromZero = require("./squaredNumbersFromZero.js");

test("should be defined", () => {
  expect(squaredNumbersFromZero).toBeDefined();
});

test("should return a list of squared numbers from 0", () => {
  expect(squaredNumbersFromZero(3)).toEqual([0, 1, 4, 9]);
});
