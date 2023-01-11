/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



*/

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
