const removeDuplicatesAndStrings = (arrayOfItems) => {
  let onlyItems = [];
  arrayOfItems.forEach((item) => {
    onlyItems.includes(item)
      ? null
      : typeof item === "string"
      ? null
      : onlyItems.push(item);
  });
  return onlyItems;
};

console.log(removeDuplicatesAndStrings([1, 1, 2, 2, 3, 3, 3, 4, "German"]));
