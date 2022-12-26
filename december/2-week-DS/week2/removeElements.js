var removeElements = function (head, val) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let current = head;

  while (current !== null) {
    if (current.val === val) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return dummy.next;
};
