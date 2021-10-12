const random = require("./random");

test("should be defined", () => {
  expect(random).toBeDefined();
});

test("should return a random number between two given numbers", () => {
  expect(random(1, 10)).toBeLessThanOrEqual(10);
  expect(random(1, 10)).toBeGreaterThanOrEqual(1);
});
