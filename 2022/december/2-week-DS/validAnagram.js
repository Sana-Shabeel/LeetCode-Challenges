/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true


Example 2:
Input: s = "rat", t = "car"
Output: false


*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (splitStr.includes(char)) {
      splitStr.splice(splitStr.indexOf(char), 1);
    }
  }

  return splitStr.length === 0 ? true : false;
};

// a faster runtime solution

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  // order the characters alphabetically
  const sortS = s.split("").sort().join("");
  const sortT = t.split("").sort().join("");

  // and compare
  return sortS === sortT;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("aacc", "ccac"));
