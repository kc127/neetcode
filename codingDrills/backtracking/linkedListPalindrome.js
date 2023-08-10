// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }


function solution(head) {
  let curr = head;

  let reversedList = reverseLL(head);
  let tail = reversedList;
  console.log(tail)
  while (curr) {
      if (curr.value !== tail.value) {
          return false;
      }
      curr = curr.next;
      tail = tail.next;
  }
  return true;
}

function reverseLL(node) {
  if (!node) return null;
  let curr = node;
  let prev = null;
  while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
  }
  console.log("here")
  return prev;
}
