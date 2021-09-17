const permutation = (numbers, number) => {
  for (let i = 0; i < number; i++) {
    if (numbers[i] !== i + 1) {
      return false;
    }
  }
  return true;
};

console.log(permutation([1, 2, 3, 4, 5], 5));
