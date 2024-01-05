// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head, target, value) {
  if (!head) return head;
  if (head.value === target) {
      let targetNode = new ListNode(value);
      targetNode.next = head;
      return targetNode;
  }
  let curr = head;
  while (curr && curr.next) {
      if (curr.next.value === target) {
          let targetNode = new ListNode(value);
          let temp = curr.next;
          curr.next = targetNode;
          targetNode.next = temp;
          break;
      } else {
          curr = curr.next;
      }
  }

  if (curr.next === null && curr.value === target) {
      curr.next = new ListNode(value);
      curr = curr.next;
  }
  return head;

}
