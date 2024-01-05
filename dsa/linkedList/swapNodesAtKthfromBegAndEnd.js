/*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).


EXAMPLE(S)
Input: head = [1,2,3,4,5], k = 2
Output:       [1,4,3,2,5]

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output:       [7,9,6,6,8,7,3,0,9,5]

Input: head = [8], k = 1
            = [8]

[1, 2, [3], 4, 5, 6, 7, [8], 9, 10], k = 3
[1, 2, 8, 4, 5, 6, 7, 3, 9, 10]

[1, [2], 3, [4], 5], k = 2
[1, 4, 3, 2, 5]

FUNCTION SIGNATURE
def swapNodes(self, head: ListNode, k: int) -> ListNode:
*/

// Q: Assume that k is valid?
// A: Yes.

// Q: New list?
// A: No, same, in-place.

// Assume length is at least k.
// Override values, not repoint.
// Find the kth from the beginning and the end, and we're gucci.
// Two pointers: advance first pointer k-1 ahead.
// Second pointer: Behind first pointer.
// Dummy node pointing to head. --> ?
// First pointer needs to be copied over to another pointer.

// [1, 2, 3, 4, 5, 6, 7]  k = 3
//  s     f
//     s     f
//        s     f
//           s     f
//              s     f
class Node {
  constructor(value = 0, next = null){
    this.value = value;
    this.next = next;
  }
}

function arrarify(head){
  const arr = []

  let curr = head
  while(curr){
    arr.push(curr.value)
    curr = curr.next
  }
  return arr
}

function swapNodes(head, k) {
  const dummyNode = new Node();
  dummyNode.next = head;

  let firstPtr = dummyNode;

  for (let i = 0; i < k; i++) {
    firstPtr = firstPtr.next;
  }

  let secondPtr = dummyNode;
  let indicator = firstPtr;

  while (indicator != null) {
    indicator = indicator.next
    secondPtr = secondPtr.next
  }

  [secondPtr.value, firstPtr.value] = [firstPtr.value, secondPtr.value];
  return head;
}


const tests = [

]

let LL1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
// console.log(arrarify(swapNodes(LL1, 2)))

let LL2 = new Node(8);
// console.log(arrarify(swapNodes(LL2, 1)))

let LL3 = new Node(2, new Node(7));
console.log(arrarify(swapNodes(LL3, 1)))

let LL4 = new Node(2, new Node(7, new Node(8)));
console.log(arrarify(swapNodes(LL4, 2)))

