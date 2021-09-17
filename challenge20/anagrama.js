const toTextSorted = (text) => {
  return text.toLowerCase().replace(/[^\w]/gi, "").split("").sort().join("");
};

const isAnagrama = (word1, word2) => {
  return toTextSorted(word1) === toTextSorted(word2)
    ? `Son anagramas`
    : `No son anagramas`;
};

console.log(isAnagrama("German", "mnearg"));
