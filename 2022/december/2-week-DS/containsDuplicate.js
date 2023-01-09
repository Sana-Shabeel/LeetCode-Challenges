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

// A better approach is to just compare the 2 arrays lengths
// if set removed the duplicates then the removeDuplicates array would be less than old array
// runtime for this was 145 ms

var containsDuplicate = function (nums) {
  const removeDuplicates = new Set(nums);
  return nums.length !== [...removeDuplicates].length ? true : false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
