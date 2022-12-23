var searchMatrix = function (matrix, target) {
  const flattend = matrix.flat();

  return flattend.includes(target);
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
