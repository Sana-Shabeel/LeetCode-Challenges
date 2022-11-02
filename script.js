var averageValue = function (nums) {
  // all numbers are postive numbers
  // we need to return the AVERAGE value of all even numbers that are divisible by 3
  // Step 1: find the EVEN ints in the array
  // Step 2: from the EVEN ints find the ones that can be divisble by 3
  // step 3: find the AVERAGE of all the numbers from step 2
  // ELSE  : return 0
  const postiveInts = nums.filter((n) => n % 2 === 0);
  const divisbleby3 = postiveInts.filter((n) => n % 3 === 0);
  const averageValue =
    divisbleby3.reduce((a, b) => a + b, 0) / divisbleby3.length;
  return divisbleby3.length === 0 ? 0 : Math.floor(averageValue);
};

console.log(averageValue([1, 3, 6, 10, 12, 15])); // 9
console.log(averageValue([1, 2, 4, 7, 10])); // 0
console.log(
  averageValue([
    94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84,
    3, 79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21,
  ])
); // rounded down to 61
