/* find max element in a linked list */

function findMaxIterative(head) {
  if (!head) return null;
  let max = -Infinity;
  let curr = head;

  while (curr) {
    max = Math.max(curr.value, max);
    curr = curr.next;
  }
  return max;
}

function findMaxRecursively(head) {
  if (!head) return null;
  if (!head.next) return head.value;
  return Math.max(findMaxRecursively(head), head.value);
}