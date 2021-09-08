const reverseNumber = (number) => {
  return (
    parseInt(number.toString().split("").reverse().join("")) * Math.sign(number)
  );
};

console.log(reverseNumber(-1000002));
