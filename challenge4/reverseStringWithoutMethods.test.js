const reverseString = require("./reverseStringWithoutMethods");

test("should be defined", () => {
  expect(reverseString).toBeDefined();
});

test("should return the string reversed", () => {
  expect(reverseString("German")).toEqual("namreG");
});
