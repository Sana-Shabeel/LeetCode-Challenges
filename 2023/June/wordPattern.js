/*

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

*/

var wordPattern = function (pattern, s) {
  let words = s.split(" ");
  let map = new Map();
  let set = new Set();
  if (words.length !== pattern.length) return false;
  for (let i = 0; i < words.length; i++) {
    if (!map.has(pattern[i])) {
      if (set.has(words[i])) return false;
      map.set(pattern[i], words[i]);
      set.add(words[i]);
    } else {
      if (map.get(pattern[i]) !== words[i]) return false;
    }
  }
  return true;
};

console.log(wordPattern(["abba", "dog cat cat dog"]));

console.log(wordPattern(["abba", "dog cat cat fish"]));

console.log(wordPattern(["aaaa", "dog cat cat dog"]));
