/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count(string) {
  // TODO
  const map = new Map();

  for (let i = 0; i < string.length; i++) {
    const curr = string[i];

    if (map.has(curr)) {
      map.set(curr, map.get(curr) + 1);
    } else {
      map.set(curr, 1);
    }
  }
  return Object.fromEntries(map);
}

console.log(count("abaaaab"));

// alternative solution

function count(string) {
  var count = {};
  string.split("").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
