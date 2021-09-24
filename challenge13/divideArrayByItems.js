const divideArrayByItems = (arr, items) => {
  let arrDivided = [];
  while (arr.length > 0) {
    arrDivided.push(arr.splice(0, items));
  }
  return arrDivided;
};

console.log(divideArrayByItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
