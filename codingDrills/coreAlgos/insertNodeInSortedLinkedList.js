/* insert a target element in a sorted linked list */

function insertIterative(head, target) {
  if (!head) return new ListNode(target);
  let dummyHead = new ListNode(0, head);
  let curr = dummyHead;

  while (curr) {
    if (!curr.next || target < curr.next.value) {
      let temp = curr.next;
      curr.next = new ListNode(target);
      curr.next.next = temp;
      break;
    }
    curr = curr.next;
  }
  return dummyHead.next;
}

function insertRecursive(head, target) {
  let curr = head;
  if (!curr) {
    return new ListNode(target);
  } else if (target < curr.value) {
    return new ListNode(target, curr);
  } else {
    curr.next = insertRecursive(curr.next, target);
  }
  return head;
}