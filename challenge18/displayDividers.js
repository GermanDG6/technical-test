const isDivider = (num, divider) => {
  if (num % divider === 0) return divider;
  return 0;
};

const displayDividers = (num) => {
  for (let i = 0; i <= num; i++) {
    let divider = isDivider(num, i);
    if (divider) console.log(divider);
  }
};

displayDividers(20);
