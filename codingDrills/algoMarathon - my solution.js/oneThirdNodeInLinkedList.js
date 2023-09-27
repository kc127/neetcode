// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head) {
  let length = 0;
  let curr = head;
  while (curr) {
      length++;
      curr = curr.next;
  }
  let oneThird = Math.floor(length/3);
  let newCurr = head;
  for (let i = 1; i <= length && newCurr; i++) {
      if (i === oneThird) {
          return newCurr.value;
      }
      newCurr = newCurr.next;
  }

}
