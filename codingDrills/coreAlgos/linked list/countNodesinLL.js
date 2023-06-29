/* count elements in a linked list */

function countNodesIterative(head) {
  let count = 0;
  let curr = head;

  while (curr) {
    count++;
    curr = curr.next;
  }
  return count;
}

function countNodesRecursive(head) {
  if (!head) return 0;
  return 1 + countNodesRecursive(head.next);
}