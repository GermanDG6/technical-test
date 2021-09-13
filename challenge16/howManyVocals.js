const howManyVocals = (text) => {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      counter++;
    }
  }
  return `En el texto hay ${counter} vocales`;
};

console.log(howManyVocals("a jsdhfkjsd   ei   i   ii    "));
