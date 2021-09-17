const firstCapitalLetter = (text) => {
  let words = text.toLowerCase().split(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
};

console.log(firstCapitalLetter("hOLA sOY gerMAN delGaDO garCIA"));
