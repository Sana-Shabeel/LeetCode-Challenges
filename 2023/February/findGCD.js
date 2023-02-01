/*
Find Greatest Common Divisor of Array

Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Example 1:

Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.
Example 2:


*/

var findGCD = function (nums) {
  let biggest = Math.max(...nums);
  let smallest = Math.min(...nums);
  let r = biggest % smallest;

  while (r !== 0) {
    biggest = smallest;
    smallest = r;
    r = biggest % smallest;
  }

  return smallest;
};

console.log(findGCD([2, 5, 6, 9, 10]));
