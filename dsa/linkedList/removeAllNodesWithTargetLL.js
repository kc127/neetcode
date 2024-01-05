/* remove all elements with a target value in a linked list */

function removeTargetNodeLLIterative(head, target) {
  if (!head) return null;
  let sentinel = new ListNode(0, head);
  let curr = sentinel;

  while (curr && curr.next) {
    if (curr.next.value === target) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return sentinel.next;
}

// 1 >> 1 >> 3
function removeTargetNodeLLRecursively(head, target) {
  if (!head) {
    return null;
  } else if (head.value === target) {
    return removeTargetNodeLLRecursively(head.next, target);
  } else {
    head.next = removeTargetNodeLLRecursively(head.next, target);
    return head;
  }
}