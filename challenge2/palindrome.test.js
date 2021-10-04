const { expect } = require("@jest/globals");
const isPalindrome = require("./palindrome");

test("isPalindrome function is defined", () => {
  expect(isPalindrome).toBeDefined();
});

test("Is a palindrome", () => {
  expect(isPalindrome("ojo")).toBe(true);
});

test("Is not a palindrome", () => {
  expect(isPalindrome("German")).toBe(false);
});
