const squaredNumbersFromZero = (number) => {
  let squaredNumbers = [];
  for (let i = 0; i <= number; i++) {
    squaredNumbers.push(Math.pow(i, 2));
  }
  return squaredNumbers;
};

module.exports = squaredNumbersFromZero;
