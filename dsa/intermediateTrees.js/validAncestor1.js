class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
/*

Valid Ancestor

Given a binary tree of numbers, and two numbers, A and B, determine if A is an ancestor of B.


EXAMPLE(S)
  3
1   2
A=3 and B=1 returns true
A=3 and B=2 returns true
A=2 and B=3 returns false

  3
1   2
   4 5
A=3 and B=5 returns true
A=2 and B=5 returns true
A=5 and B=2 returns false

    3
return false

      1
  2       3

  level traversal of the tree
  1. keep track of the current level nodes
     if curr level has ancestor => update ancestor as SEEN
     if curr level has descendent => check if ancestor has already been SEEN
        IF YES => return true
  return FALSE


Approach:

FUNCTION SIGNATURE
function validAncestor(root, ancestor, descendent) {

*/
function validAncestorBFS (root, ancestor, descendent) {
  if (!root) return false;
  if (ancestor === descendent) return false;
  let queue = [root];
  let ancestorPresent = false;

  while (queue.length) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();

      if (curr.value === ancestor) {
        ancestorPresent = true;
      }
      if (curr.value === descendent && !level.includes(ancestor)) {
        return ancestorPresent && true;
      }
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      level.push(curr.value);
    }
  }
  return false;
}

function validAncestorDFS(root, ancestor, descendent) {

  function depthFirstSearch(node, foundAncestor) {
    if (!node) {
      return false;
    }
    if (node.value === descendent) {
      return foundAncestor;
    }
    if (node.value === ancestor) {
      foundAncestor = true;
    }
    return depthFirstSearch(node.left, foundAncestor) || depthFirstSearch(node.right, foundAncestor);
  }
  return depthFirstSearch(root, false);
}

//    1
//  3   2
//     5 9

let tree = new TreeNode(1,
  new TreeNode(3, null, null),
  new TreeNode(2,
     new TreeNode(5, null, null),
     new TreeNode(9, null, null)
  )
)

console.log(validAncestorDFS(tree, 2, 2) == false)
console.log(validAncestorDFS(tree, 1, 2) == true)
console.log(validAncestorDFS(tree, 1, 7) == false)
console.log(validAncestorDFS(tree, 1, 9) == true)

//   0
// 1   2
//    3 4
tree = new TreeNode(0,
  new TreeNode(1, null, null),
  new TreeNode(2,
     new TreeNode(3),
     new TreeNode(4)
  )
)
console.log(validAncestorDFS(tree, 3, 4) == false)

/**
 *          1
 *      2       3
 */

// let tree1 = new TreeNode(1,
//                 new TreeNode(2),
//                 new TreeNode(3));

// /**
//  *                  1
//  *            2        3
//  *        4      5
//  */

// let tree2 = new TreeNode(1,
//                 new TreeNode(2,
//                     new TreeNode(4),
//                     new TreeNode(5)),
//                 new TreeNode(3))

// console.log(printTree(tree1), ' expect [[1], [2, 3]]');
// console.log(printTree(tree2), ' expect [[1], [2, 3], [4, 5]]');