const repeatString = (str, times) => {
  let repeatedString = "";
  for (let i = 0; i < times; i++) {
    repeatedString += str;
  }
  return repeatedString;
};

console.log(repeatString("hola", 3));
