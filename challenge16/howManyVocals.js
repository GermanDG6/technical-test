const howManyVocals = (text) => {
  let vocals = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      vocals++;
    }
  }
  return `En el texto hay ${vocals} vocales`;
};

console.log(howManyVocals("a jsdhfkjsd   ei   i   ii    "));

// function with regex

const vocalsInAText = (text) => {
  let vocals = text.match(/[aeiou]/gi);
  return `En el texto hay ${vocals.length} vocales`;
};

console.log(vocalsInAText("Hola soy German probando una funcion con regex"));
