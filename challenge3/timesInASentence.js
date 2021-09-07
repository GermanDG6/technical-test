const timesInASentence = (sentence, word) => {
  let words = sentence.toLowerCase().split(" ");
  let numberOfTimes = words.reduce((acc, eachWord) => {
    eachWord === word.toLowerCase() ? acc++ : acc;
    return acc;
  }, 0);
  return numberOfTimes;
};

console.log(
  timesInASentence(
    "Numero de palabras palabras en una frase, PALABRAS",
    "PALABRAS"
  )
);
