/*
TWO SUM


You are given a target number and an array

add the number in the array to the target number. and the return the number i in the array

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

function twoSum(nums, target) {
  // nested for loop

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // console.log("i", nums[i]);
    for (let j = i; j < nums.length; j++) {
      nums[i] + nums[j + 1] === target ? result.push(i, j + 1) : [i, j + 1];
    }
  }

  return result;
}

console.log(twoSum([3, 2, 4], 6));
