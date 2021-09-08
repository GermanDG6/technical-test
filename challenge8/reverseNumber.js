const reverseNumber = (number) => {
  return Number(
    number.toFixed().split("").reverse().join().replace(/[,]/gi, "")
  );
};

console.log(reverseNumber(1000002));
