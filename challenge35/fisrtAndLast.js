const firstAndLast = (arr) => {
  let firstAndLast = [];
  firstAndLast.push(arr[0], arr[arr.length - 1]);
  return firstAndLast;
};

console.log(firstAndLast([1, 2, 3, 4, 5]));
