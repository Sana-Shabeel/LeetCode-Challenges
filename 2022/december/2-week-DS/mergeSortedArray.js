/*
MERGE SORTED ARRAY 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].


Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.



*/

var merge = function (nums1, m, nums2, n) {
  // cut the last 0's from the array
  nums1.length = nums1.length - n;

  // replace the last 0's with nums2 array elements
  nums1.push(...nums2);
  // sort the elements
  nums1.sort((a, b) => a - b);
};
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5));
console.log(merge([1, 2, 4, 5, 6, 0], 5, [3], 1)); // [1,2,3,4,5,6]
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); // [-1,0,0,1,2,2,3,3,3]

/*----------------------------------------------------------------

  const lastSpots = nums1.slice(-n);
  console.log(lastSpots);
  nums1.unshift(...lastSpots);
  nums1.length = m + n;
  console.log(nums1);

  for (let i = 0; i < nums2.length; i++) {
    nums1[i] = nums2[i];
  }

  nums1.sort();


 for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0) {
      //   console.log("æ");
      nums1[i] = nums2[i];
    }
  }





  //   nums1 = nums1.concat(nums2);
  //   console.log("nums2", nums2);
  //   console.log("nums1", nums1);
  
  
       nums2.forEach((el, idx) => {
        console.log(el);
        nums1.splice(i, 1, el);
      });
  
  
  
    //   console.log(nums1[i]);
      //   console.log("idx", i - n);

  
    console.log(nums2[i]);
    console.log("idx", i - n);

  if (nums1.length === 1) {
    nums1[0] = nums2[0];
  }

  for (let i = 0; i < nums1.length; i++) {
    // console.log(nums1[i]);
    if (nums1[i] < 1) {
      console.log(nums2[i]);
      nums1[i] = nums2[i];
    }
  }
  nums1.sort();


*/
