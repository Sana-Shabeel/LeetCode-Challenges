/*



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
