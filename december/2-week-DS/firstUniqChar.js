var firstUniqChar = function (s) {
  const dup = s.split("");
  const [...set] = new Set(dup);

  const countOccur = (char) =>
    dup.reduce((sum, curr) => (char === curr ? sum + 1 : sum + 0), 0);

  for (let i = 0; i < set.length; i++) {
    const char = set[i];

    if (countOccur(char) !== 1) {
      console.log(char);
      continue;
    }

    return dup.indexOf(char);
  }
  return -1;
};
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aaabb"));
console.log(firstUniqChar("dddccdbba"));
