const toTextSorted = (text) => {
  return text
    .toLowerCase()
    .replace(new RegExp(/[!?., ]/, "gi"), "")
    .split("")
    .sort();
};

const text =
  "Hola me llamo German! estoy aburrido? quiero probar a quitar la coma, y el punto.";

const isAnagrama = (word1, word2) => {
  for (let i = 0; i < word1.length; i++) {
    if (toTextSorted(word1)[i] === toTextSorted(word2)[i]) {
      return `Son anagramas`;
    } else {
      return `No son anagramas`;
    }
  }
};

console.log(isAnagrama("German", "mnearg"));
