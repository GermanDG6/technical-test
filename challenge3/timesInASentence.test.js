const timesInASentence = require("./timesInASentence");

test("should be defined timesInASentence function", () => {
  expect(timesInASentence).toBeDefined();
});

test("should return number of times in a sentence", () => {
  expect(
    timesInASentence("My name is German, but i'm not german", "German")
  ).toBe("La palabra aparece 2 veces en la frase");
});
