class ListNode{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const head = new ListNode(1, n2);

/*
  1 -> 2 -> 3 -> 4 -> 5 -> null
            s
                      f

*/


function findThirdQuarterNode(head){
  if (!head) return head;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    if (fast.next && fast.next.next === null) {
      fast = slow
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

console.log(findThirdQuarterNode(head)) // 1->2->3->4->5 returns 3
console.log(findThirdQuarterNode(n2)) // 2->3->4->5 returns 4