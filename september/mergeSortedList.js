/* 

MERGE TWO SORTED LIST

You are given the heads of two sorted linked lists l1 and l2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


Example 2:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]


1- create an empty list


  let node = l1.head;
  while (node) {
    count += node.value;
    node = node.next;
  }
  return count;

    node1.value < node2.value
      ? count.push(node1.value)
      : count.push(node2.value);
      
      
      let node1 = l1.head;
  let node2 = l2.head;
      
      
 return [...l1, ...l2].sort((a, b) => a - b);
 
 
 l1.head < l2.head ? l1.head : l2.head
 
 
  let dummyHead = list1.head < list2.head ? list1.head : list2.head;

  let node1 = list1.head;
  let node2 = list2.head;

  while (node1 && node2) {
    dummyHead = node1 < node2 ? node1 : node2;
    node1 = node1.next;
    node2 = node2.next;
  }

  return dummyHead;
  
  ////////////////////////////////////////////////////////////////
  
  let dummyHead = l1.head < l2.head ? l1.head : l2.head;

  while (node1 && node2) {
    if (l1.value <= l2.value) {
    }
    node1 = node1.next;
    node2 = node2.next;
  }

  return dummyHead;
  
  
  
  
 
  
  
  
  
*/

const mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(-Infinity);
  let head = dummy;

  while (l1 && l2) {
    if (l1.value <= l2.value) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  if (l1 !== null) {
    dummy.next = l1;
  } else {
    dummy.next = l2;
  }

  return head.next;
};

const l1 = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};
const l2 = {
  head: {
    value: 7,
    next: {
      value: 11,
      next: {
        value: 13,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

console.log(mergeTwoLists(l1, l2));
