function validP(s) {
  if (s.length === 1) return false;
  const opening = ["(", "[", "{"];
  const brackets = ["()", "[]", "{}"];
  const stack = [];

  const bracketArray = s.split("");
  for (let i = 0; i < bracketArray.length; i++) {
    if (opening.includes(bracketArray[i])) {
      stack.push(bracketArray[i]);
    } else if (brackets.includes(stack.slice(-1) + bracketArray[i])) {
      stack.pop();
    } else {
      stack.push(bracketArray[i]);
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(validP("()"));
