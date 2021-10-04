const percentOfANumber = (percent, number) => {
  return `El ${percent}% de ${number} es ${(number * percent) / 100}`;
};

module.exports = percentOfANumber;
