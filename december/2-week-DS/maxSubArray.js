var maxSubArray = function (nums) {
  // first element is it's contigous subArray so we set maxSum to index 0
  let maxSum = nums[0];

  // set current sum to be the max sum
  let currentSum = maxSum;

  // set a pointer at index 1 and iterate over the array
  for (let i = 1; i < nums.length; i++) {
    // currentSum is equal to the max of the (current iteration(nums[i]) + the previous currentSum ) or (the current iteration)
    currentSum = Math.max(nums[i] + currentSum, nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, 1, -3, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
