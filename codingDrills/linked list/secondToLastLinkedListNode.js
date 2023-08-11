function secondToLast(head) {
  if (!head || !head.next) return null;
  let curr = head;
  // 1 -> 2 -> 3

  while (curr.next && curr.next.next){
    curr = curr.next;
  }
  return curr.value;
}

class Node{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

console.log(secondToLast(null) === null)

// 1
let head = new Node(1)
console.log(secondToLast(head) === null)

// 1 -> 2
head = new Node(1, new Node(2))
console.log(secondToLast(head) === 1)

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(secondToLast(head) === 2)

// 1 -> 2 -> 3 -> 4
head = new Node(1, new Node(2, new Node(3, new Node (4))))
console.log(secondToLast(head) === 3)

// 1 -> 2 -> 3 -> 4 -> 5
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
console.log(secondToLast(head) === 4)