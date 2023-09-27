/*

Q. Given a linked list, determine if it is monotonically increasing. Monotonically increasing means always increasing or remaining constant.

Examples:

Given a linked list: 1 -> 1 -> 2 -> 5 // returns True
Given a linked list: -1 -> -5 -> 3 -> -100, // returns False
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] linkedlist.integer head

head of the list

[output] boolean

*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head) {
  if (!head) return false;

  let isIncreasing = true;
  let curr = head;
  while (isIncreasing && curr && curr.next) {
      if (curr.value <= curr.next.value) {
          isIncreasing = true;
      } else {
          isIncreasing = false;
          break;
      }
      curr = curr.next;
  }
  return isIncreasing;
}
