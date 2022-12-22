var maximumDifference = function (nums) {
  // set the min to the first number for now
  let min = nums[0];
  let maxDiff = -1;

  for (let i = 1; i < nums.length; i++) {
    let currentNum = nums[i];
    let diff = currentNum - min;
    console.log(diff);

    maxDiff = Math.max(maxDiff, diff);

    // if the current number is less than the maximum number, reset the minimum to currentNum
    if (currentNum < min) min = currentNum;
  }

  return maxDiff;
};
