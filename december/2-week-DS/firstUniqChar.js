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
  const [...set] = new Set(splitString);

  const countOccur = (char) =>
    splitString.reduce((sum, curr) => (char === curr ? sum + 1 : sum + 0), 0);

  for (let i = 0; i < set.length; i++) {
    const char = set[i];

    if (countOccur(char) !== 1) {
      console.log(char);
      continue;
    }

    return splitString.indexOf(char);
  }
  return -1;
};
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aaabb"));
console.log(firstUniqChar("dddccdbba"));
