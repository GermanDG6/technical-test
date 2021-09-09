const censorWordInText = (text, word) => {
  let textCensured = "";
  let words = text.split(" ");
  word === undefined || text === undefined
    ? (textCensured = "Los campos deben estar rellenos")
    : (textCensured = text.replace(new RegExp(word, "gi"), "[-CENSORED-]"));

  return textCensured;
};

console.log(censorWordInText("Hola soy un textoloco para censurar", "texto"));
