/*
Unique Morse Code Words

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.

Example 1:

Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".

*/

var MORSE_CODE = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

var uniqueMorseRepresentations = function (words) {
  let morse = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let m = "";
    for (let j = 0; j < word.length; j++) {
      const s = word[j];

      m += MORSE_CODE[s];
    }

    morse.push(m);
  }

  const [...set] = new Set(morse);
  return set.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
console.log(uniqueMorseRepresentations(["a"]));
