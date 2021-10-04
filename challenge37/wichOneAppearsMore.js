const wichOneAppearsMore = (item) => {
  let counter = {},
    appearsMore = "",
    appearsManyTimes = 0;
  if (typeof item === "string") {
    item = item.split(" ");
  }
  for (let word of item) {
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }
  for (let word in counter) {
    console.log(word);
    if (counter[word] > appearsManyTimes) {
      appearsManyTimes = counter[word];
      appearsMore = word;
    }
  }
  console.log(counter);
  return `${appearsMore} es el dato que mas se repite, apareciendo ${appearsManyTimes} veces`;
};

console.log(
  wichOneAppearsMore(" 1 Hello my name is German , but i'm not German")
);
