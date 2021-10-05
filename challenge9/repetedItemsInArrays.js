const repetedItemsInArrays = (array1, array2) => {
  let repeted = array1.filter((item) => {
    return array2.includes(item);
  });
  return repeted;
};

module.exports = repetedItemsInArrays;
