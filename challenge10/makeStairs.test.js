const makeStairs = require("./makeStairs");

test("should be defined", () => {
  expect(makeStairs).toBeDefined();
});

test("should return a stairs of a given size", () => {
  expect(makeStairs(4)).toEqual("[-]\n[-][-]\n[-][-][-]\n[-][-][-][-]\n");
});
