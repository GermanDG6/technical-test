//Classic Function
const repeatString = (str, times) => {
  let repeatedString = "";
  for (let i = 0; i < times; i++) {
    repeatedString += str;
  }
  return repeatedString;
};

console.log(repeatString("hola", 3));

//Prototype function
String.prototype.repeatStr = function (times) {
  let repeatedString = "";
  for (let i = 0; i < times; i++) {
    repeatedString += this;
  }
  return repeatedString;
};

console.log("German D G ".repeatStr(5));
