/*
'''
❓ PROMPT
Given an array, create a palindrome linked list by iterating through the array forwards and backwards. *The last element should not be repeated.*

Example(s)
createPalindromeLL([99]) == "99"
createPalindromeLL([1,4,5]) == "1 -> 4 -> 5 -> 4 -> 1"


*/

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


function createPalindromeLL(arr) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return new ListNode(arr[0]);

  let dummyHead = new ListNode();
  let curr = dummyHead;
  let i = 0;

  while (i < arr.length) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
    i++;
  }
  let j = arr.length - 2;
  while (j >= 0) {
    curr.next = new ListNode(arr[j]);
    curr = curr.next;
    j--;
  }
  return dummyHead.next;
}

// class Node {
//   constructor(val, next = null) {
//     this.val = val
//     this.next = next
//   }
// }

// function createPalindromeLL(arr) {
//   if (!arr.length)
//     return null

//   let sentinel = new Node()
//   let curr = sentinel

//   for (let i = 0; i < arr.length; i++) {
//     curr.next = new Node(arr[i])
//     curr = curr.next
//   }

//   for (let i = arr.length - 2; i >= 0; i--) {
//     curr.next = new Node(arr[i])
//     curr = curr.next
//   }

//   return sentinel.next
// }

function toString(head) {
  if (!head)
    return "<empty>"

  let parts = []
  while(head) {
    parts.push(head.value)
    head = head.next
  }
  console.log(parts);
  return parts.join(" -> ")
}

console.log(toString(createPalindromeLL([])) === "<empty>")
console.log(toString(createPalindromeLL([99])) === "99")
console.log(toString(createPalindromeLL([4,2])) === "4 -> 2 -> 4")
console.log(toString(createPalindromeLL([1,4,5])) === "1 -> 4 -> 5 -> 4 -> 1")
console.log(toString(createPalindromeLL([4,9,14])) === "4 -> 9 -> 14 -> 9 -> 4")
console.log(toString(createPalindromeLL([20,15,10,5]))
    === "20 -> 15 -> 10 -> 5 -> 10 -> 15 -> 20")
console.log(toString(createPalindromeLL([5,5,5,5]))
    === "5 -> 5 -> 5 -> 5 -> 5 -> 5 -> 5")
console.log(toString(createPalindromeLL([1,2,3,2,1]))
    === "1 -> 2 -> 3 -> 2 -> 1 -> 2 -> 3 -> 2 -> 1")


// let list1 = new ListNode(1);
// let list2 = new ListNode(9,
//                   new ListNode(9));
// let list3 = new ListNode(1,
//                 new ListNode(4,
//                   new ListNode(5)))

// console.log(createPalindromeLL([1]));
// console.log(createPalindromeLL([1, 4, 5]));


