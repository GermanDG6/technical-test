const pairsBetweenTwoNumbers = require("./pairsBetweenTwoNumbers");

test("should be defined", () => {
  expect(pairsBetweenTwoNumbers).toBeDefined();
});

test("should return a list of pairs between two numbers", () => {
  expect(pairsBetweenTwoNumbers(1, 10)).toEqual(
    `El número de pares entre 1 y 10, es 4`
  );
});
