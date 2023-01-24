/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

*/

function singleNumber(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (set.has(element)) {
      set.delete(element);
    } else {
      set.add(element);
    }
  }

  return [...set];
}

var singleNumber = function (nums) {
  let numsob = {};
  if (nums.length == 1) return nums[0];

  for (n of nums) {
    if (numsob[n]) {
      numsob[n] += 1;
    } else if (!numsob[n]) {
      numsob[n] = 1;
    }
  }

  for (key in numsob) {
    if (numsob[key] == 1) return key;
  }
};
