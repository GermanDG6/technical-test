const { expect } = require("@jest/globals");
const { recommendCommands } = require("yargs");
const reverseNumber = require("./reverseNumber");

test("should be defined", () => {
  expect(reverseNumber).toBeDefined();
});

test("should return a reversed number", () => {
  expect(reverseNumber(-122)).toEqual(-221);
});
