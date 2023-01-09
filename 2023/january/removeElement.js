var removeElement = function (nums, val) {
  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }

  return nums;
};
console.log(removeElement([4, 5], 4)); // 5
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // [0,1,4,0,3]
