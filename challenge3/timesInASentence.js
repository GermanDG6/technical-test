const timesInASentence = (sentence, word) => {
  let words = sentence.toLowerCase().replace(/[,.]/gi, "").split(" ");
  let numberOfTimes = words.reduce((acc, eachWord) => {
    eachWord === word.toLowerCase() ? acc++ : acc;
    return acc;
  }, 0);
  return `La palabra aparece ${numberOfTimes} veces en la frase`;
};

console.log(
  timesInASentence(
    "Numero de palabras palabras en una frase, PALABRAS",
    "PALABRAS"
  )
);
