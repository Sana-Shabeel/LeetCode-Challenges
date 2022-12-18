/*
FIND PIVOT INDEX 

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11


Example 2:
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.


Example 3:
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0



*/

var pivotIndex = function (nums) {
  //  set the pivot index at the start
  let pIndex = 0;

  // loop through the nums array and move the pivot index 1 place at every iteration
  while (pIndex < nums.length) {
    // create 2 sides
    // each side will sum all the numbers in its array using reduce

    // using slice method, left side will start from 0 to the current index
    let leftSide = nums.slice(0, pIndex).reduce((sum, curr) => sum + curr, 0);

    // right side will slice from the current index to the last index of the array
    let rightSide = nums.slice(pIndex + 1).reduce((sum, curr) => sum + curr, 0);

    if (leftSide > rightSide) {
      pIndex++;
    } else if (rightSide > leftSide && pIndex < nums.length) {
      pIndex++;
    } else if (leftSide === rightSide) {
      console.log("===");
      return pIndex;
    }

    if (pIndex === nums.length && leftSide !== rightSide) {
      console.log("else");
      return -1;
    }
  }
};

console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
