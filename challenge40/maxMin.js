const maxMin = (numbersList) => {
  let max = numbersList[0],
    min = numbersList[0];
  numbersList.forEach((number) => {
    number > max ? (max = number) : max;
    number < min ? (min = number) : min;
  });
  return [min, max];
};

module.exports = maxMin;
