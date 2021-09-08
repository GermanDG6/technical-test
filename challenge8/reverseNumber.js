const reverseNumber = (number) => {
  return Number(
    number.toString().split("").reverse().join().replace(/[,]/gi, "")
  );
};

console.log(reverseNumber(1000002));
