const squared = (numbers) => {
  let squaredNumbers = [];
  numbers.map((number) =>
    typeof number === "number"
      ? squaredNumbers.push(Math.pow(number, 2))
      : undefined
  );
  return squaredNumbers;
};

console.log(squared([1, 2, 3, "German", 7]));
