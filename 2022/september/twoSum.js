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

/*


A faster runtime


The function twoSum takes an array of numbers and a target value as arguments. The function iterates through the array, every time it takes a number from the array, it adds it to a new number in the array. If the sum of the two numbers is equal to the target value, the function returns an array of the indices of the two numbers.


code generated by ai

*/

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

// Method using hashmap

var twoSum = function (nums, target) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    const subtractTarget = target - nums[i];

    // the goal is to add 2 number to get the target
    // so if we subtract the target once and then look for the result in the hashmap

    if (hash.has(subtractTarget)) {
      return [i, hash.get(subtractTarget)];
    }

    hash.set(nums[i], i);
  }

  return hash;
};
