const factor = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

console.log(factor(5));
