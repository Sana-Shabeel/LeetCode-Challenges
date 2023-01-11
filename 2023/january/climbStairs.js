var climbStairs = function (n) {
  let one = 1;
  let two = 1;

  for (let i = n; i > 0; i--) {
    let temp = one;
    one = one + two;
    two = temp;
  }

  return two;
};
console.log(climbStairs(4));
