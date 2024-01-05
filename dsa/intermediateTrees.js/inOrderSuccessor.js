/*
Given a binary search tree and a target value, return the in-order successor.

=========================================
1. Explore
- Understand the problem by asking clarifying questions and clearing up ambiguities
- Convert the abstract into the concrete using examples
- Categorize the examples and make insightful & revealing test scenarios

Assumptions:
1. Key may not be present in the input BST, return null if that is the case.
2. One node tree allowed as input




                 9
            7        10

in-order => left > current > right
in-order successor of 9 would be 10

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

//     5
//  2     8
// 1 4   6 9


key = 4, return 5
key = 6, return 8
key = 5, return 6
key = 2, return 4


let rt = new Node(5,
      new Node(2,
        new Node(1),
        new Node(4)),
      new Node(8,
        new Node(6),
        new Node(9)))

            9
        5

key = 9, return null

=========================================
===Discoveries===


===Happy Cases===
- Target does not have right child
- Target has child

===Edge Cases===
- Key may not be present in the input BST, return null if that is the case.
- The target value is the largest value in the tree, it has no successor, so we return null

===Bad Cases (can be same as edge cases)===


=========================================
2. Brainstorm
- Discuss possible algorithms
- Focus on problem-solving instead of implementation
- Discuss the space and time complexities of the solution(s)
=========================================
===Option(s)===

key was 1: [5, 2, 1]
         last seen and greater than the key
key was 4: [5, 2, 4]

//     5
//  2     8
// 1 4   6 9

Idea: Do an in order traversal, check each element
1 -> O(n)
2 -> O(logn)

Idea: Binary search to find the target, store nodes that you visited, then go in revrse order and pick the one that is the first element greater than the target value

Idea: Similar idea, but a parent pointer is used to traverse back up the tree. When there's no right child, the successor is the first parent whose previous node is its left child.

Idea: Binary search to find the target, storing nodes that are greater than the key we've visited on our way to the taget
      root, key

            if root = key ,
            if root < key ,  get rid of root.left
            if root > key

- Case 1: key has a right child
min value in right subtree

- Case 2: key does not have right child
Idea:
  Could the successor be the first element we visited, if the target does not have a right child


*/

// simple iterative (SI)
function inOrderSuccessorSI(root, target) {
  let successor = null
  let curr = root

  while (curr) {
    if (curr.val < target)
      curr = curr.right
    else if (curr.val > target) {
      successor = curr
      curr = curr.left
    } else // curr.val === target
      break
  }

  if (!curr)
    return successor

  if (curr.right) {
    curr = curr.right
    while (curr.left)
      curr = curr.left
    return curr
  }

  return successor
}

// simple recursive (SR)
function inOrderSuccessorSR(root, target, successor=null) {
  if (!root)
    return successor

  if (root.val < target)
    return inOrderSuccessorSR(root.right, target, successor)
  else if (root.val > target)
    return inOrderSuccessorSR(root.left, target, root)
  else { // root.val === target
    if (root.right) {
      root = root.right
      while (root.left)
        root = root.left
      return root
    }
  }

  return successor
}

// concise iterative (CI)
function inOrderSuccessorCI(root, target) {
  let successor = null
  let curr = root

  while (curr) {
    if (curr.val <= target)
      curr = curr.right
    else if (curr.val > target) {
      successor = curr
      curr = curr.left
    }
  }

  return successor
}

// concise recursive (CR)
function inOrderSuccessorCR(root, target, successor=null) {
  if (!root)
    return successor

  if (root.val <= target)
    return inOrderSuccessorCR(root.right, target, successor)
  else if (root.val > target)
    return inOrderSuccessorCR(root.left, target, root)
}


