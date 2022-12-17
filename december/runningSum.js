var runningSum = function (nums) {
  // nums[1] + nums[2]
  let first = 0;
  let second = 1;

  const sum = (ns) => ns.reduce((sum, curr) => sum + curr, nums[0]);

  //   console.log(nums.slice(0, second));

  console.log(sum(nums.slice(first, 0)));

  return nums.map((n, i) => sum(nums.slice(first, i)));
};

// console.log(runningSum([1, 2, 3, 4, 0])); // 1 3 6 10
console.log(runningSum([1, 1, 1, 1, 1])); // 1 3 6 10
