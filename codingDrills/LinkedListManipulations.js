/*
Coding drill :

Question :

function swapValuePairs(head) - swap the data in each node without swapping pointers

Input : 1->2->3->4
Output : 2->1->4->3

Input: 1 -> 2 -> 3
Output: 2 -> 1 -> 3

Input: null
Output: null

Input: 1 -> null
Output: 1 -> null

Assumption/Observation/Edge case :
- Linked List can have odd number of nodes, we do not disturb the last node in such case


Approach :

  1->2->3->4
        c
           c.n

  nextPair = node.next.next
  curr = node
  next = node.next

  curr.val, next.val = next.val, curr.

  if nextPair:
  curr = nextPair


Question :
function additionNext(head) - add to the value in each node by the value in the next node. The tail node has no next node so double its value

Input : 1->2->3->4->5
Output : 3->5->7->9->10

Input : 1->2->3->4
Output : 3->5->7->8

Input: 1-> null
Output: 2 -> null

Input: null
Output: null

Input: 1 -> -1 -> null
Output: 0 -> -2 -> null

Counter questions :


Question :
function removeLastQuarterNodes(head) - remove the last 1/4 of the nodes in the linked list.

Input : 1->2->3->4
Output : 1->2->3

Input : 1->2->3->4->5->6->7->8
Output : 1->2->3->4->5->6
        #         s
        #                   f

Input : 1->2->3
Output : 1->2->3

Input : 1
Output : 1

Input : 1->2->3->4->5->6->7
Output : 1->2->3->4->5->6



Assumptions/Edge Cases:
1. if number of nodes is less than 4, return original list
2. if number of nodes is greater than 4,
    nodes to remove = Math.floor(number of nodes/4)

Approach 1:
  find the length of the LL
  divide it by 4 to understand how many nodes are to be removed
  use two pointers

Approach 2:
  Fast and Slow pointer


Follow up :
Try solving question 3
https://leetcode.com/problems/copy-list-with-random-pointer/
*/


//Ryans

class Node{
  constructor(value, next = null){ //try to provide default value to next
    this.value = value;
    this.next = next;
  }
}

const LL1 = new Node(1, new Node(2, new Node(3, new Node(4))))
const LL2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
const LL3 = new Node(1)
const LL4 = null;

function swapValues(head){

  if(head == null){
    return null
  }

 let cur = head;
  while(cur && cur.next){
    let temp;
    temp = cur.value;
    cur.value = cur.next.value;
    cur.next.value = temp;
    cur = cur.next.next;
  }
  return JSON.stringify(head);
}


function additionNext(head) {
  if(head === null)return null
  let cur = head;

  while (cur) {
    if (cur.next == null) {
      cur.value *= 2;
    } else {
      cur.value += cur.next.value;
    }

    cur = cur.next;
  }

  return JSON.stringify(head);
}
console.log("Ryan")
console.log(additionNext(LL1));
console.log(additionNext(LL2));
console.log(additionNext(LL3));
console.log(additionNext(LL4));

console.log("Kanchan")

console.log(additionNextK(LL1));
console.log(additionNextK(LL2));
console.log(additionNextK(LL3));
console.log(additionNextK(LL4));
// console.log("Ryan");
// console.log(swapValues(LL1));
// console.log(swapValues(LL2));
// console.log();
// console.log("Kanchan");
// console.log(swapValuesK(LL1));
// console.log(swapValuesK(LL2));
// console.log(swapValuesK(LL3));
// console.log(swapValuesK(LL4));

//Kanchan
function swapValuesK(head) {
  if (!head) return null;

  let curr = head;
  while (curr && curr.next) {
    [curr.value, curr.next.value] === [curr.next.value, curr.value];
    curr = curr.next.next;
  }
  return JSON.stringify(head);
}
/*
  1 -> 2 -> 3
            c
              c.n
*/
function additionNextK(head) {
  if (!head) return null;

  let curr = head;
  while (curr && curr.next) {
    curr.value = curr.value + curr.next.value;
    curr = curr.next;
  }
  curr.value = curr.value + curr.value;
  return JSON.stringify(head);
}


//David
/*
  def swapValues(head):
    curr = head
    while True:
      if curr.next:
        if curr.next.next: nextpair = curr.next.next
        curr.val, curr.next.val = curr.next.val, curr.val
      if nextpair: curr = nextpair
      else:
        return head

  def addNext(head):
    if not head: return None
    curr = head
    while curr and curr.next:
      curr.val += curr.next.val
      curr = curr.next
    curr.val *= 2


  # Move fast pointer 4 and slow pointer 3
  # make slow.next None
  def removelastquarter(head)
  fast = head
  slow = head

        # Does not handle fractional amounts correctly
            while fast:

              for i in range(4):
                if fast: fast = fast.next
                else:
                  break
              for i in range(3):
                if slow: slow = slow.next:
                else:
                  return head
              slow.next = None

    return head







*/

// Nma
/*

class ListNode:
  def __init__(self, val, next=None)
    self.val = val

  def toString(self):
    cur = self
    string = ""

    while cur:
      string += str(cur.val) + " "

    return string

  def swapNodes(head):
    if not head or not head.next:
      return head

    cur = head
    while cur and cur.next:
      temp = cur.next.val
      cur.next.val = cur.val
      cur.val = temp
      cur = cur.next.next

    return  head

  def additionNext(head): #no early exit ?
    if not head:
      return head

    cur = head
    while cur and cur.next:
      cur.val += cur.next.val
      cur = cur.next

    cur.val *= 2

    return head
*/