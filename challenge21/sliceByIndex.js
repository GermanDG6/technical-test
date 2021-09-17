const sliceByIndex = (text, index) => {
  return typeof text === "string" && typeof index === "number"
    ? text.slice(0, index)
    : "Introduce bien los datos";
};

console.log(sliceByIndex("German Delgado García", 6));
