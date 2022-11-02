/*

VALID PARENTHESES


Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true


Example 3:

Input: s = "(]"
Output: false

- Used the stack data structure 
  A stack is a data structure that holds a list of elements.
  A stack works based of the LIFO principle i.e Last In, First Out, meaning that the most recently added element is the first element out of the stack. 
  
  A stack has only 2 main operations that occur at the top of the stack: push and pop.
  
  
1- take the first element of the string and push it to the stack
2- check if the second element is also an open bracket 
3- if not the put the last element in the and the second element in the string to see if they make a valid parentheses 
4- if they do then pop the last element from the stack otherwise push it 
5- then at last count the number of elements in the stack

*/

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

console.log(validP("()[{}()]"));

// How a Stack data structure can be used to reverse a string
function reverse(s) {
  const stack = [];
  const reversed = [];
  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
    reversed.unshift(stack.pop());
  }
  return reversed.join("");
}

console.log(reverse("anas"));
