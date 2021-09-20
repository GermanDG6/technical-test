const capicua = (number) => {
  let reverse = parseInt(number.toString().split("").reverse().join(""));
  return reverse === number ? "Es capicua " + true : "No es capicua " + false;
};

console.log(capicua(525));
