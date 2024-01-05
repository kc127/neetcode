/**
 * function createCycle(head) - point the tail to the head.
function multiplyNext(head) - multiply the value in each node by the value in the next node. The tail node has no next node so multiply it by itself.
function removeEveryOther(head) - remove every other node, skipping the head. The first node to be removed should be after the head.
function rotateValuesLeft(head) - move the values left without altering next pointers. The head's value should become the tail's new value.
function findThirdQuarterNode(head) - find the node 3/4ths length through the linked list. How can this be solved with 1 pass without a length variable?

 */

///////////TESTING///////////
const lst1 = [1,2,3,4];
const lst2 = [1,2,3,4,5];
const lst3 = [-1,-2,3,-4,5];

class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }

  toString() {
    let result = String(this.value);
    if (this.next) {
      result += ` -> ${this.next.toString()}`;
    }
    return result;
  }
}

// const n5 = new ListNode(5);
// const n4 = new ListNode(1, n5);
// const n3 = new ListNode(3, n4);
// const n2 = new ListNode(2, n3);
// const n1 = new ListNode(1, n2);


function createCycle(head)
{
  if (!head)
  {
    return head;
  }
    let currentNode = head;


    //traverse the list
    while(currentNode.next)
    {
      currentNode = currentNode.next;
    }

    //set the tail to the next pointer of the head
    currentNode.next = head;


  return head;

}


// function multiplyNext(head) - multiply the value in each node by the value in the next node. The tail node has no next node so multiply it by itself.

function multiplyNext(head){

  if (!head) {
    return null;
  }

  let currentNode = head;

  while (currentNode.next) {
    currentNode.value *= currentNode.next.value;
    currentNode = currentNode.next;
  }

  currentNode.value *= currentNode.value;

  return head;

}


// const n5 = new ListNode(5);
// const n4 = new ListNode(4, n5);
// const n3 = new ListNode(3, n4);
// const n2 = new ListNode(2, n3);
// const head = new ListNode(1, n2);


// 1->2->3->4->5
//1->3->5
//
/*
 1 -> null returns 1 -> null
 1 -> 2 -> return 1 -> null
 null return null

*/

function removeEveryOther(head)
{
  if(!head || !head.next)
  {
    return head
  }

  let curr = head;
  let count = 0;

  while(curr && curr.next){
    // curr.next = curr.next.next
    // curr = curr.next

    if (count % 2 === 0)
    {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
    count += 1;
  }

  return  head;
}

// console.log(removeEveryOther(null));


/*
function rotateValuesLeft(head) - move the values left without altering next pointers. The head's value should become the tail's new value.

assumption:
- in place
-  without altering next pointers.
- just changing the values

H
1 -> 2 -> 3 -> null
          T
2 -> 3 -> 1

1 -> null
T
H
return 1 -> null

1 -> 2 -> null
2 -> 1 -> null


  check if one node, if yes, return head
  headValue
  while curr.next
      curr = curr.next

  swap curr value with headvalue
  return head
*/


// const n5 = new ListNode(5);
// const n4 = new ListNode(4, n5);
// const n3 = new ListNode(3, n4);
// const n2 = new ListNode(2, n3);
// const head = new ListNode(1, n2);

function rotateValuesLeft(head) {
  if (!head) return head;
  let headValue = head.value;
  let curr = head;

  while (curr.next) {
    curr.value = curr.next.value;
    curr = curr.next;
  }
  curr.value = headValue;
  return head;
}

// console.log(rotateValuesLeft(head).toString())


// function findThirdQuarterNode(head) - find the node 3/4ths length through the linked list. How can this be solved with 1 pass without a length variable?

const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const head = new ListNode(1, n2);

function findThirdQuarterNode(head){
  let len = 0;
  let curr = head;

  while(curr){
    len++
    curr = curr.next;
  }

  let position = Math.floor(len * 3 / 4);
  curr = head;
  for(let i = 1; i < position; i++){
    curr = curr.next;
  }
  return curr;
}
// 2 -> 3-> 4 -> 5
        //  c
// len 4
// position
console.log(findThirdQuarterNode(n2).toString())

// 1 - 2 - 3 - 4
//    s
//    f

