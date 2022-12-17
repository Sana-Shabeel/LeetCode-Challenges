var runningSum = function (nums) {
  // nums[1] + nums[2]
  let first = 0;

  const sum = (ns) => ns.reduce((sum, curr) => sum + curr, 0);

  //   console.log(nums.slice(0, 1));

  //   console.log("0", sum(nums.slice(first, 0)));
  //   console.log("1", sum(nums.slice(first, 1)));

  return nums.map((n, i) => sum(nums.slice(first, i + 1)));
};

// console.log(runningSum([1, 2, 3, 4, 0])); // 1 3 6 10
console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]

//   while (first < nums.length) {
//     console.log("first", first);
//     console.log("second", second);

//     const x = nums.map((n) => n[first] + n[second]);

//     first += 1;
//     second += 1;
//   }
