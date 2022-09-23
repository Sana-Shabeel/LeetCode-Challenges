/*

LONGEST COMMON PREFIX

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

/*

FAILED !!!!

const longestCommonPrefix = function (strs) {
  if (strs[0].length === 0) return strs[0];
  const [...allSameChars] = new Set(strs);
  if (allSameChars.length === 1) return allSameChars[0];

  console.log(allSameChars);
  // console.log(strs);

  let commonPrefix = [];

  let condition = true;
  let count = 1;

  while (condition) {
    // this will remove the first letter from every string and push it to commonPrefix
    const x = strs.map((el) => {
      commonPrefix.push(el.slice(0, count));
      return el.slice(count);
    });
    console.log(x);
    console.log("commonP", commonPrefix);

    // if the first el are all the same then it will be an array of duplicate strings and this will remove the duplicate strings
    const [...dup] = new Set(commonPrefix);
    console.log("duplicate", dup);
    // console.log(dup.length);

    if (dup.length === 1) {
      console.log("true");
      // commonPrefix = commonPrefix.slice(strs.length);
      commonPrefix = [];
      count++;
      condition = true;
    } else {
      console.log("false");
      console.log("else", commonPrefix);
      commonPrefix = commonPrefix.map((c) => c.slice(0, c.length - 1));
      condition = false;
    }
  }

  console.log(commonPrefix);

  return commonPrefix.slice(-1);
};

console.log(longestCommonPrefix(["a", "ac"]));

// edge accesses

// ["ab", "a"]

// ["", ""]
// [""]

// ["flower", "flower", "flower", "flower"]

*/

// NEW APPROACH

var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length === 1) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

function xmastree(num) {
  for (let i = 0; i < num; i++) {
    const start = "*".repeat(i);
    const blankspace = " ".repeat(num - i);
    console.log(blankspace + start + "*" + start);
  }

  return "x";
}

console.log(xmastree(5));
