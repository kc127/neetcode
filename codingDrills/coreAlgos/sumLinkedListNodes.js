/* sum elements in a linked list */
function sumNodesLinkedListIterative(head) {
  if (!head) return null;
  let sum = 0;
  let curr = head;

  while (curr) {
    sum += curr.value;
    curr = curr.next;
  }
  return sum;
}

function sumNodesLinkedListRecursive(head) {
  if (!head) return 0;
  let sum = 0;
  sum += head.value + sumNodesLinkedListRecursive(head.next);
  return sum;
}

