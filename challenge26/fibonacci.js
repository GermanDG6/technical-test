const fibonacci = (number) => {
  let result = [0, 1];
  for (let i = 0; i < number - 1; i++) {
    result.push(result[i] + result[i + 1]);
  }
  return [result, result[number]];
};

console.log(
  "Serie Fibonacci:" + fibonacci(10)[0] + "\n" + "Resultado:" + fibonacci(10)[1]
);
