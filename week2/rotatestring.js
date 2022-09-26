/*
ROTATE STRING


Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false


abc -> cba






*/

var rotateString = function (s, goal) {
  const arr = s.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    let removed = arr.shift();
    let pushed = arr.push(removed);
    if (arr.join("") == goal) {
      console.log(arr.join(""));
      break;
    }
  }
  return arr.join("") === goal;
};

console.log(rotateString("abcde", "cdeab"));

// a different approach from yt

var rotateString2 = function (s, goal) {
  if (s.length !== goal.length) return false;
  if (s.length === 0 && goal.length === 0) return true;
  const concatinated = s + s;
  return concatinated.includes(goal);
};

console.log(rotateString2("abcde", "cdeab"));
