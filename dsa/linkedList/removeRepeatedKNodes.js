/*
Q. Given a linked list, limit the number of repetitions to k. Iterate through the linked list, keeping track of how many times the value has been repeated. Once a value has been repeated k target number of times, remove any future instances of that node.
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head, k) {
  let freqMap = {};
  let curr = head;

  while (curr) {
      freqMap[curr.value] = (freqMap[curr.value] || 0) + 1;
      if (freqMap[curr.value] > k) {
          curr.value = "x"
      }
      curr = curr.next;
  }

  let newCurr = head;
  if (newCurr && !newCurr.next) {
      if (newCurr.value === "x") {
          return null;
      } else {
          return newCurr;
      }
  }
  while (newCurr && newCurr.next) {
      if (newCurr.next.value === "x") {
          let temp = newCurr.next.next;
          newCurr.next = temp;
      }
      newCurr = newCurr.next;
  }
  return head;
}

/*


head: [6, 1, 2, 1, 2, 1, 2]
k: 1

[6, 1, 2]

*/