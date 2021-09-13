const howManyVocals = (text) => {
  let vocals = 0;
  const textLowerCase = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (
      textLowerCase[i] === "a" ||
      textLowerCase[i] === "e" ||
      textLowerCase[i] === "i" ||
      textLowerCase[i] === "o" ||
      textLowerCase[i] === "u"
    ) {
      vocals++;
    }
  }
  return `En el texto hay ${vocals} vocales`;
};

console.log(howManyVocals("jrtfr"));

// function with regex

const vocalsInAText = (text) => {
  let vocals = text.match(/[aeiou]/gi);
  return vocals
    ? `En el texto hay ${vocals.length} vocales`
    : `En el texto hay 0 vocales`;
};

console.log(vocalsInAText("Hola soy German probando una funcion con regex"));
