const vowelsAndConsonants = (text) => {
  let vocals = 0,
    consonants = 0,
    letters = text
      .split("")
      .filter((letter) => /[áéíóú\w]/gi.test(letter) && isNaN(letter));
  for (let i = 0; i < letters.length; i++) {
    if (/[áéíóúaeiou]/gi.test(letters[i])) {
      vocals++;
    } else {
      consonants++;
    }
  }
  return `EL texto tiene ${vocals} vocales y ${consonants} consonantes`;
};

console.log(vowelsAndConsonants("GermÁn  Delgado GarCÍa 123 ,.klasdfh "));
