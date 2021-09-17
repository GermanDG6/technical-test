const upperLowerCase = (text) => {
  let upper = 0;
  let lower = 0;
  for (letter of text) {
    /[A-Z]/.test(letter) ? upper++ : lower++;
  }
  return upper < lower ? text.toLowerCase() : text.toUpperCase();
};

console.log(upperLowerCase("GERMan"));
