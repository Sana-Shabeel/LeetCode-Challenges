var pivotIndex = function (nums) {
  let pIndex = 0;

  // console.log(-1 + -1); // === -1 + -1 + 0

  // console.log(leftSide);
  // console.log(rightSide);
  while (pIndex < nums.length) {
    let leftSide = nums.slice(0, pIndex).reduce((sum, curr) => sum + curr, 0);
    let rightSide = nums.slice(pIndex + 1).reduce((sum, curr) => sum + curr, 0);

    // console.log("leftSide", leftSide);
    // console.log("rightSide", rightSide);
    console.log("index", pIndex);
    console.log("lastindex", pIndex + 1 === nums.length);

    if (leftSide > rightSide) {
      console.log("left >");
      pIndex++;
    } else if (rightSide > leftSide && pIndex < nums.length) {
      console.log("right >");
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

// console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
