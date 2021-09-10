const toZero = (num) => {
  let countDown = `--- Del ${num} al 0 ---\n`;
  while (num > 0) {
    countDown += `-nº ${num} \n`;
    num -= 8;
  }
  num <= 0 ? (countDown += `-nº ${0} \n`) : num;
  countDown += `---FIN---`;
  return countDown;
};

console.log(toZero(80));
