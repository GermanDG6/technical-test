const mostRepeatedLetter = (text) => {
  let letters = {};
  let maxRepeats = 0;
  let mostRepeated = "";
  for (let letter of text.toLowerCase()) {
    if (!letters[letter]) {
      letters[letter] = 1;
    } else {
      letters[letter]++;
    }
    if (letter === " ") letters[letter] = 0;
  }
  for (const letter in letters) {
    if (letters[letter] > maxRepeats) {
      maxRepeats = letters[letter];
      mostRepeated = letter;
    }
  }
  return `La letra mas repetida es ${mostRepeated}`;
};

console.log(mostRepeatedLetter(" a                 "));
