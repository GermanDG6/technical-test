const isEmail = require("./isEmail");

test("should be defined", () => {
  expect(isEmail).toBeDefined();
});

test("should return if is a valid email", () => {
  expect(isEmail("germandg6@gmail.com")).toBe(true);
});

test("should return if is no a valid email", () => {
  expect(isEmail("germandg@jiniño")).toBe(false);
});
