/*
206. Reverse Linked List


Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]


Example 2:
Input: head = [1,2]
Output: [2,1]


Example 3:
Input: head = []
Output: []

*/

var reverseList = function (head) {
  let current = head;

  // init prev to null
  let prev = null;

  while (current !== null) {
    // when we point current's next to prev we risk losing the next node
    // so we will assign NEXT to next node at the beginning of iteration
    const next = current.next;

    // current at the first iteration points to null
    current.next = prev;

    // prev is now where current was
    prev = current;

    // we reset current to the next node
    current = next;
  }

  return prev;
};
