var maxSubArray = function (nums) {
  // KADANE'S ALGOTHRIM

  // initialize max sum to 0
  let maxSum = 0;

  // set current sum to be the max sum
  let currentSum = maxSum;

  for (let i = 0; i < nums.length; i++) {
    // currentSum is equal to the max of the (current iteration(nums[i]) + the previous currentSum ) or (the current iteration)

    currentSum = Math.max(nums[i] + currentSum, nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

console.log(maxSubArray([-2, 1, -3, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
