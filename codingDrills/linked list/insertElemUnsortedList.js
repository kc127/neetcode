// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head, target, value) {
  if (!head) return head;

  let length = 0;
  let curr1 = head;
  while (curr1) {
      length++;
      curr1 = curr1.next;
  }
  if (target >= length || target < 0) return head;
  let curr = head;
  let idx = 0;
  while (idx < length && curr) {
      if (idx === target) {
          let temp = curr.next;
          let targetNode = new ListNode(value);
          curr.next = targetNode;
          targetNode.next = temp;
          break;
      } else {
          idx++;
          curr = curr.next;
      }
  }
  return head;
}
