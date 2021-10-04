const percent = require("./percent");

test("percent function should be defined", () => {
  expect(percent).toBeDefined();
});

test("should return the percent of a number", () => {
  expect(percent(20, 100)).toEqual("El 20% de 100 es 20");
});
