const repetedItemsInArrays = require("./repetedItemsInArrays");

test("should be defined", () => {
  expect(repetedItemsInArrays).toBeDefined();
});

test("should return the repeted items between two arrays", () => {
  expect(repetedItemsInArrays([1, 2, 3], [2, 4, 5])).toEqual([2]);
});
