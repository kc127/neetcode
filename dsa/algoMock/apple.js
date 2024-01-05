/*
Given the head of a singly linked list, reverse the list, and return the head of the reversed list.

Eg 1:
In: head = 1 -> 2 -> 3 -> 4 -> 5 -> 6
Out: 6 -> 5 -> 4 -> 3 -> 2 -> 1

Eg 2:
In: head = 1 -> undefined
Out: 1 -> undefined

Eg 3:
head: 10 -> 12 -> 10
out: 10 -> 12 -> 10

Approach:

iterative => O(length of the input list)
space => O(1)
      prev
null <- 1        2   ->  3
                 head     head.next
                 curr

     temp = head.next = 2
     head.next = prev
     prev = head
     head = temp
     curr = curr.next


*/

class Node {
  constructor(data, next = undefined){
    this.data = data
    this.next = next
  }
}

function solution_1(head){
  let curr = head;
  let prev = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

let ll1 = new Node(1,
                  new Node(2,
                      new Node(3,
                        new Node(4,
                          new Node(5,
                              new Node(6))))));

let ll2 = new Node(10,
                  new Node(12,
                        new Node(10)));

let ll3 = new Node(1);

// def printLL(head):
//     string = ""
//     while head:
//         string += str(head.data) + "->"
//         head = head.next

//     print(string)

function printLL(head) {
  let str = [];
  while (head) {
    str.push(String(head.data));
    head = head.next;
  }
  return str.join(" -> ");
}

console.log(printLL(solution_1(ll1))); // 6 -> 5 -> 4 -> 3 -> 2 -> 1
console.log(printLL(solution_1(ll2))); // 10 -> 12 -> 10
console.log(printLL(solution_1(ll3))); // 1
console.log(printLL(solution_1(null))); // null

/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Assumption:
1. reversing the list from left to right (inclusive)
2. left can be equal or less than right
3. left and right are within bounds of the list

Eg 1: In: head = 1 -> 2 -> 3 -> 4 -> 5 -> 6, leftIndex = 1, rightIndex = 3
                 1    2    3    4    5    6
                      x    x    x
                      left      right

Out:             1 -> 4 -> 3 -> 2 -> 5 -> 6
                      right     left

Eg 2: In: head = 1 -> 2 -> 3 -> 4 -> 5 -> 6, leftIndex = 2, rightIndex = 4
Out: 1 -> 2 -> 5 -> 4 -> 3 -> 6

Eg 3: 1 -> 2 -> 3
      left
      right
      1 -> 2 -> 3
Eg 4: 1
      left
      right
      1

Approach:
      helper => reverseList(startingNode)
                l         r
    9  ->  1 -> 2 -> 3 -> 4 -> 5 -> 6
                          ^

        index       prev    curr      temp
          1                  1
          2         null     2


        pseudocode:
          index = 1
          leftTail =
          rightHead = 5 -> 6
          startingNode = null
          endingNode = null
          prev = null
          curr = null
        - while curr is not null
              check if index is equal or greater than right
                if YES:
                      rightHead = curr.next
              check if index is equal or greater than left
                if YES:
                    temp = curr.next
                    curr.next = prev
                    prev = curr
                    curr = temp
              increment index
              increment curr

    startingNode.next = rightHead;

*/
