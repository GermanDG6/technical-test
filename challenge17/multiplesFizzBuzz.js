const multiplesFizzBuzz = (num) => {
  num % 3 === 0 && num % 5 === 0
    ? (num = "FizzBuzz")
    : num % 3 === 0
    ? (num = "Fizz")
    : num % 5 === 0
    ? (num = "Buzz")
    : num;
  return num;
};

const from1ToNum = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(multiplesFizzBuzz(i));
  }
};

from1ToNum(15);
