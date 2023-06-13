/*
* Given a linked list and an integer, find whether the integer exists in the list. Return a boolean.
* Given a linked list and an integer, return how many times the integer exists in the list.
* Find mean of a list of integers
* Replace all negative values with a 0
* Reverse the list
*/

// {
//   next: Node,
//   value: int
// }

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findInt(node, target) {
  if (node === null) return false;
  if (node.value === target) return true;

  return findInt(node.next, target)
}

function findOccurences(node, target) {
  if (node === null) return 0;
  if (node.value === target) {
    return 1 + findOccurences(node.next, target);
  }

  return findOccurences(node.next, target);
}

function findOccurences(node, target) {
  if (node === null) return 0;
  let count = 0;
  if (node.value === target) {
    count = 1
  }
  return count + findOccurences(node.next, target);
}


function findOccurences(node, target) {
  if (node === null) return 0;

  let count = node.value === target ? 1 : 0;
  return count + findOccurences(node.next, target);
}

const reverseList = (head) => {
  let newHead = null;

  const helper = (node) => {
    if (node.next === null) {
      newHead = node;
      return node;
    }

    let newTail = helper(node.next);
    newTail.next = node;
    return node;
  }

  helper(node);
  return newHead;
}


null <- (1) <- (2) <- (3) <- (4)
/*
function outer(outerArg, outerArg, ...) outerResult {
  globalState variables

  function inner(innerArg, innerArg, ...) innerResult {
    ...
    inner(...)
    ...
    return innerResult
  }

  outerResult = transform(inner(...))
  return outerResult
}
*/