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
