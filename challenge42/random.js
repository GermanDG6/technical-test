const random = (num1, num2) => {
  return Math.round(Math.random() * (num2 - num1) + num1);
};

console.log(random(1, 10));
module.exports = random;
