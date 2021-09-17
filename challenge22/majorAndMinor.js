const majorAndMinor = (num1, num2) => {
  return num1 === num2
    ? `Son iguales`
    : num1 > num2
    ? `El numero mayor es ${num1} \n El numero menor es ${num2}`
    : num1 < num2
    ? `El numero mayor es ${num2} \n El numero menor es ${num1}`
    : "Introduce ambos valores correctos";
};

console.log(majorAndMinor("4", 3));
