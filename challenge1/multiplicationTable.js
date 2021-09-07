const multiplicationTable = (number) => {
  let result = `Tabla del ${number} \n`;
  for (let i = 1; i <= 10; i++) {
    result += `${i} x ${number} = ${i * number} \n`;
  }
  return result;
};

console.log(multiplicationTable(5));
