const average = require("./average");

test("should be defined", () => {
  expect(average).toBeDefined();
});

test("should return a average of a number list", () => {
  expect(average([1, 2, 3, 4, 5])).toBe(10);
});
