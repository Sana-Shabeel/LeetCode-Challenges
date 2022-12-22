/*
566. Reshape the Matrix






*/

var matrixReshape = function (mat, r, c) {
  const flattendArray = mat.flat();

  if (mat.length * mat[0].length != r * c) return mat;

  const answer = [];

  for (let i = 0; i < flattendArray.length; i += c) {
    answer.push(flattendArray.slice(i, i + c));
  }

  return answer;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
