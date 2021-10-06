// const squaredNumbersFromZero = (number) => {
//   let squaredNumbers = [];
//   for (let i = 0; i <= number; i++) {
//     squaredNumbers.push(Math.pow(i, 2));
//   }
//   return squaredNumbers;
// };

const squaredNumbers = (number) => {
  return number * number;
};

const squaredNumbersFromZero = (number) => {
  let squaredList = [];
  for (let i = 0; i <= number; i++) {
    squaredList.push(squaredNumbers(i));
  }
  return squaredList;
};

module.exports = squaredNumbersFromZero;
