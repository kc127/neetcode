/* find element in a sorted linked list */

function findElementLLIterative(head, target) {
  let curr = head;
  while (curr) {
    if (curr.value === target) return true;
    curr = curr.next;
  }
  return false;
}

function findElementLLRecursively(head, target) {
  if (!head) {
    return false;
  } else if (head.value === target) {
    return true;
  }
  return findElementLLRecursively(head.next, target);
}