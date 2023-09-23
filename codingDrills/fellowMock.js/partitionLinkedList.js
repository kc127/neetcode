/*
'''
Given a linked list of numbers and a pivot k, partition the linked list so that all nodes less than k come before nodes greater than or equal to k.

Assumptions:
- Order does not matter as long as the partition is correct.
- Pivot value MAY or MAY NOT be present in the input list.
- in case when pivot value is not present, return input list as it is.
      WRONG:
      CORRECT:


EXAMPLE(S)
Given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 5, the solution could be
1 -> 0 -> 3 -> 5 -> 8

or any of the following:
0 -> 1 -> 3 -> 5 -> 8
0 -> 3 -> 1 -> 5 -> 8
1 -> 3 -> 0 -> 5 -> 8
3 -> 0 -> 1 -> 5 -> 8
3 -> 1 -> 0 -> 5 -> 8

1 -> 2 -> 3  pivot k = 4
return 1 -> 2 -> 3

1 -> 2 -> 10 -> 15 -> 0 -> 100, k = 1
return 0 -> 1 -> 2 -> 10 -> 15

55, k = 55
return 55

55, k = 0
return 55

null, k = 100
return null

1 -> 100 -> 2 -> 3 -> 3 -> 4, k = 4
return 1 -> 2 -> 3 -> 3 -> 4 -> 100

Approach:

  Idea 1: Iterative Traveral of the list

    lessThanK list = 1 -> 0 -> 3
    greaterThanK list = 8
    equalToK list = 5 -> 5
    connect:
          lessThanK => equalToK => greaterThanK

    bind the two list together and return the final list

        5 -> 1 -> 8 -> 0 -> 3 and k = 5
        8 -> 1 -> 5 -> 0 -> 3

    Time Complexity: O(n)
    Space Complexity: O(n)



FUNCTION SIGNATURE
def partition(head: Node, k: int) -> Node:
'''
*/

class ListNode{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/*

       5 -> 1 -> 8 -> 0 -> 3 ->null. and k = 5
                                c

      (-1) -> 1 -> 0 -> 3
      (-1) -> 5
      (-1) -> 8


*/

function partition(head, k) {
  if (!head) return head;

  let curr = head;
  let lessThanKNodes = new ListNode(-1);
  let greaterThanKNodes = new ListNode(-1);
  let equalToKNodes = new ListNode(-1);

  let headOfLessThanKNodes = lessThanKNodes;
  let headofEqualToKNodes = equalToKNodes;
  let headOfGreaterThanKNodes = greaterThanKNodes;

  while (curr) {
    if (curr.value === k) {
      equalToKNodes.next = new ListNode(curr.value);
      equalToKNodes = equalToKNodes.next;
    } else if (curr.value < k) {
      lessThanKNodes.next = new ListNode(curr.value);
      lessThanKNodes = lessThanKNodes.next;
    } else if (curr.value > k) {
      greaterThanKNodes.next = new ListNode(curr.value);
      greaterThanKNodes = greaterThanKNodes.next;
    }
    curr = curr.next;
  }

  // if pivot is not present in the list
  if (headofEqualToKNodes.next === null) {
    lessThanKNodes.next = headOfGreaterThanKNodes.next;
  } else {
    lessThanKNodes.next = headofEqualToKNodes.next;
    equalToKNodes.next = headOfGreaterThanKNodes.next;
  }

  return headOfLessThanKNodes.next;
}

// 5 -> 1 -> 8 -> 0 -> 3 ->null. and k = 5
let list1 = new ListNode(5,
              new ListNode(1,
                new ListNode(8,
                  new ListNode(0,
                    new ListNode(3)))));

                    let list2 = new ListNode(5,
                      new ListNode(5,
                        new ListNode(8,
                          new ListNode(0,
                            new ListNode(3)))));



function str(list) {
  while (list) {
    console.log(list.value)
    list = list.next;
  }
}

//console.log(str(partition(list1, 5))); // 1 -> 0 -> 3 -> 5 -> 8
console.log(str(partition(list1, 2))); // 1 -> 0 -> 3 -> 5 -> 8
console.log(str(partition(list2, 5))); // 0 -> 3 -> 5-> 5 -> 8
console.log(str(partition(list2, 9))); // 0 -> 3 -> 5-> 5 -> 8



// Two pointer list re-wiring
function partition(head, pivot) {
  // The head might change so let's use a sentinel for
  // the overall list.
  const sentinel = new LLNode("sentinel", head);
  // Collect the nodes greater than the pivot with the equal nodes
  // at the beginning.
  const greaterOrEqualNodes = new LLNode("greater");
  // remember the location of the last node in the greater
  // or equal list.
  let lastGreater = greaterOrEqualNodes;

  let curr = sentinel;

  while (curr.next) {
    if (curr.next.value > pivot) {
      const node = curr.next;
      lastGreater.next = node;
      curr.next = node.next;
      node.next = null;
      lastGreater = node;
    } else if (curr.next.value === pivot) {
      // place at the beginning of the greater or equal nodes list
      const node = curr.next;
      curr.next = node.next;
      node.next = greaterOrEqualNodes.next;
      greaterOrEqualNodes.next = node;
    } else {
      // just keep moving
      curr = curr.next;
    }
  }

  curr.next = greaterOrEqualNodes.next;

  return sentinel.next;
}