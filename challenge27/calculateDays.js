const calculateDays = (number) => {
  let years = Math.floor(number / 365);
  let months = Math.floor((number % 365) / 30);
  let days = Math.floor((number % 365) % 30);
  return `${number} dias son ${years} años, ${months} meses y ${days} días`;
};

console.log(calculateDays(920));
