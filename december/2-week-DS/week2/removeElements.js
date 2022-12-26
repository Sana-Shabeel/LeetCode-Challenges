/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]


Example 2:
Input: head = [], val = 1
Output: []


Example 3:
Input: head = [7,7,7,7], val = 7
Output: []

*/
var removeElements = function (head, val) {
  let dummy = new Node(-1);

  // chain dummy to head, so dummy.next would be head
  dummy.next = head;

  // dummy here is -1 but dummy.next would be head
  let prev = dummy;
  let current = head;

  while (current !== null) {
    if (current.val === val) {
      // move previous to to the node after the current node
      prev.next = current.next;
      // current node will be where previous node is
      // fx [1,2,3,4]  if current node was at 2 and prev node was at 1, prev node would now be at 3 and current node would progress normally moving it to the next node
      current = current.next;
    } else {
      // otherwise previous node would be tailing current node
      prev = current;

      // and current node will move normally
      current = current.next;
    }
  }

  // since prev node is now now at null we will return dummy.next,
  return dummy.next;
};
console.log(removeElements(a, 6));
