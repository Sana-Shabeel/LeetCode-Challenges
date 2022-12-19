var containsDuplicate = function (nums) {
  // 2 ways to tackle this problem
  // 1. is using Set()
  // === Set will only store unique values and ignore the duplicate
  // we can compare the elements in the old nums with the new ones
  // if they are the same then no duplicates were found

  // Goal => true if dups, false otherwise

  const removeDuplicates = new Set(nums);

  //  this approach takes long "Time Limit Exceeded"

  console.log(removeDuplicates);

  return nums.map((n, i) => n === [...removeDuplicates][i]).includes(false);
};
console.log(containsDuplicate([1, 2, 3, 1]));
