const maxArray = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);

  return sum / numbers.length;
};

console.log(maxArray([1, 2, 3]));
console.log(maxArray([]));
