const calculate = (number1, number2) => {
  return `The sum is: ${number1 + number2} \nThe substract is: ${
    number1 - number2
  } \nThe multiplication is: ${number1 * number2} \nThe division is: ${
    number1 / number2
  }`;
};

const calculateOperation = (number1, number2, operation) => {
  const sum = number1 + number2;
  const substract = number1 - number2;
  const multiplication = number1 * number2;
  const division = number1 / number2;
  operation === "sum"
    ? (operation = sum)
    : operation === "substract"
    ? (operation = substract)
    : operation === "multiplication"
    ? (operation = multiplication)
    : operation === "division"
    ? (operation = division)
    : undefined;
  return `The result is ${operation}`;
};

console.log(calculateOperation(5, 5, "multiplication"));

console.log(calculate(5, 5));
