const pairsBetweenTwoNumbers = (firstNum, secondNum) => {
  let numberList = [];
  for (let i = firstNum; i < secondNum; i++) {
    numberList.push(i);
  }
  let numberOfPairs = numberList.reduce((acc, number) => {
    number % 2 === 0 ? acc++ : acc;
    return acc;
  }, 0);
  return `El número de pares entre ${firstNum} y ${secondNum}, es ${numberOfPairs}`;
};

module.exports = pairsBetweenTwoNumbers;
