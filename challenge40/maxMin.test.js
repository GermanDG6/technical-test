const maxMin = require("./maxMin");

test("should be defined", () => {
  expect(maxMin).toBeDefined();
});

test("should return the maximun and the minimun value in the arary", () => {
  expect(maxMin([1, 2, 3, 4, 5, 6])).toEqual([1, 6]);
});
