/*
387. First Unique Character in a String


First Unique Character in a String


Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:
Input: s = "leetcode"
Output: 0


Example 2:
Input: s = "loveleetcode"
Output: 2


Example 3:
Input: s = "aabb"
Output: -1


*/

var firstUniqChar = function (s) {
  const splitString = s.split("");

  // stores each characters once
  const [...set] = new Set(splitString);

  // count how many times a given character appears in splitString
  const countOccur = (char) =>
    splitString.reduce((sum, curr) => (char === curr ? sum + 1 : sum + 0), 0);

  // loop through the set
  for (let i = 0; i < set.length; i++) {
    const char = set[i];

    // char appears more than once move on
    if (countOccur(char) !== 1) continue;

    // otherwise return the index of the character
    return splitString.indexOf(char);
  }

  return -1;
};
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));

// more optimal solution with a faster runtime

var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("aaabb"));
console.log(firstUniqChar("dddccdbba"));
