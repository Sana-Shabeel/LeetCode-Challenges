/*
Given two integer arrays nums1 and nums2, 
return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays ??
===¡ if the number 2 appears 2 times in both arrays then you should return an array of 2 2s
and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.


Attempt 1
concat both array and filter out the none duplicates -/-
===> does not work cause nums1 could have one number 2 times that isnt in nums2


Attempt 2
for loop and an if statement that stores dups in a new array


*/

var intersect = function (nums1, nums2) {
  const shortestArray = nums1.length < nums2.length ? nums1 : nums2;
  const longestArray = nums2.length > nums1.length ? nums2 : nums1;

  const appears = [];
  for (let i = 0; i < shortestArray.length; i++) {
    if (longestArray.includes(shortestArray[i])) {
      appears.push(shortestArray[i]);
      longestArray.splice(longestArray.indexOf(shortestArray[i]), 1);
    }
  }
  console.log("longestArray", longestArray);
  console.log("shortestArray", shortestArray);

  return appears;
};

console.log(intersect([1, 2, 2, 1], [2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
console.log(intersect([4], [4])); // [4,9]
