// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(list, target) {
  if (!list) return new ListNode(target);
  if (target <= list.value) {
      let targetNode = new ListNode(target);
      targetNode.next = list;
      return targetNode;
  };
  let curr = list;
  while (curr && curr.next) {
      if (target < curr.next.value) {
          let targetNode = new ListNode(target);
          let temp = curr.next;
          curr.next = targetNode;
          targetNode.next = temp;
          break;
      } else {
          curr = curr.next;
      }
  }
  if (curr.next === null && target > curr.value) {
       curr.next = new ListNode(target);
       curr = curr.next;
  }
  return list;
}
