var merge = function (nums1, m, nums2, n) {
  nums1.length = nums1.length - n;
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5));
console.log(merge([1, 2, 4, 5, 6, 0], 5, [3], 1)); // [1,2,3,4,5,6]
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); // [-1,0,0,1,2,2,3,3,3]
