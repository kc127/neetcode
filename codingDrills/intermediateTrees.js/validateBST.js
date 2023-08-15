/*
'''
❓ PROMPT
Determine if a binary tree is a valid binary search tree.

A binary search tree is a binary tree where for each node, all values in the left subtree are smaller than the current node, and all values in the right subtree are greater than the current node.

Example(s)
     10 <--- root
  5      15
3  7   12  17
isValidBST(root) == True

     30 <--- root
 18      50
3  7   33  77
isValidBST(root) == False
Explanation: 7 is smaller than 18, even though it's the right child.

     30 <--- root
 18      50
3  40   33  77

let tree = new TreeNode(30,
                new TreeNode(18,
                    new TreeNode(3),
                    new TreeNode(4)),
                new TreeNode(50,
                    new TreeNode(33),
                    new TreeNode(77)))

isValidBST(root) == False
Explanation: 40 is larger than 30, even though it's in the left subtree.

  3 <--- root
1   5
isValidBST(root) == True

    3 <--- root
 1     5
   4
isValidBST(root) == False

        1
    2       3

Approach:

                root
          min           max

*/

var isValidBST = function(root) {

  var dfsHelper = function(node, min, max) {
      if (!node) return true;
      if (node.val <= min || node.val >= max) {
          return false;
      }
      return dfsHelper(node.left, min, node.val) &&
              dfsHelper(node.right, node.val, max);
  }

  return dfsHelper(root, -Infinity, Infinity);
};

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

console.log(isValidBST(null))
console.log(isValidBST(new Node(5)))

//   5
// 1
console.log(isValidBST(new Node(5, new Node(1))))

  5
10
console.log(isValidBST(new Node(5, new Node(10))) === false)

//  5
//   10
console.log(isValidBST(new Node(5, null, new Node(10))))

//  5
//   1
console.log(isValidBST(new Node(5, null, new Node(1))) === false)

//   5
// 1  10
console.log(isValidBST(new Node(5, new Node(1), new Node(10))))

//   5
// 10  1
console.log(isValidBST(new Node(5, new Node(10), new Node(1))) === false)

//      10
//   5     15
// 3   7 12   17
let root = new Node(
  10,
  new Node(5,
    new Node(3), new Node(7)),
  new Node(15,
    new Node(12), new Node(17))
)
console.log(isValidBST(root))

//      10
//   5     15
// 2   16 3   20
root = new Node(
  10,
  new Node(5,
    new Node(2), new Node(16)),
  new Node(10,
    new Node(3), new Node(20))
)
console.log(isValidBST(root) === false)

//      10
//   15     20
// 30  40  1  12
root = new Node(
  10,
  new Node(15,
    new Node(30), new Node(40)),
  new Node(20,
    new Node(1), new Node(12))
)
console.log(isValidBST(root) === false)

//   10
// 1    20
//  4 15
root = new Node(
  10,
  new Node(1, null,
    new Node(4)),
  new Node(20,
    new Node(15))
)
console.log(isValidBST(root))

//   10
// 1    20
//  99 99
root = new Node(
  10,
  new Node(1, null,
    new Node(99)),
  new Node(20,
    new Node(99))
)
console.log(isValidBST(root) === false)