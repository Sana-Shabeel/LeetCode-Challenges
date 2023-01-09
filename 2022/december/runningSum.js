/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.



Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].


*/

var runningSum = function (nums) {
  let first = 0;

  // adds all the numbers in the array ns
  const sum = (ns) => ns.reduce((sum, curr) => sum + curr, 0);

  // nums.slice(first, i + 1) return an array of the first element in nums
  return nums.map((n, i) => sum(nums.slice(first, i + 1)));
};

// another approach
var runningSum2 = function (nums) {
  //loop through nums[i], 0<=i<nums.length-1
  //insert nums[i]+nums[i+1] into temp variable
  //insert temp into num[i+1]
  for (let i = 0; i < nums.length - 1; i++) {
    let temp = nums[i] + nums[i + 1];
    nums[i + 1] = temp;
  }

  //return updated nums with running sum
  return nums;
};

//TESTS
console.log(runningSum2([1, 2, 3, 4])); //Expected Output: [1,3,6,10]

console.log(runningSum([1, 2, 3, 4, 0])); // 1 3 6 10
console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
