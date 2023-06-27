/* append an element to a linked list */

function appendNodeToLLIterative(head, target) {
  if (!head) return new ListNode(target);
  let curr = head;

  while (curr.next) {
    curr = curr.next;
  }
  curr.next = new ListNode(target);
  return head;
}

function appendNodeToLLRecursively(head, target) {
  if (!head) return new ListNode(target);
  if (!head.next) {
    head.next = new ListNode(target);
  } else {
    appendNodeToLLRecursively(head.next, target);
  }
  return head;
}