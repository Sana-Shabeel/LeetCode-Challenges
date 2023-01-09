/*
383. Ransom Note


Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

    
*/

var canConstruct = function (l1, l2) {
  const set = l1.split("");

  for (let i = 0; i < l2.length; i++) {
    const char = l2[i];

    if (set.includes(char)) {
      set.splice(set.indexOf(char), 1);
    }
  }

  return set.length === 0 ? true : false;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
