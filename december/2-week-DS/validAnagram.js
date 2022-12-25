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

  const sortS = s.split("").sort().join("");
  const sortT = t.split("").sort().join("");

  return sortS === sortT;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("aacc", "ccac"));
