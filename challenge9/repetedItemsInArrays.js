const repetedItemsInArrays = (array1, array2) => {
  let repeted = array1.filter((item) => {
    return array2.includes(item);
  });
  return repeted;
};

console.log(repetedItemsInArrays([1, 2, 3, "german"], [2, 3, 4, 6, "german"]));
