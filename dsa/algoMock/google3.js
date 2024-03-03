/*
Given a binary tree, return the values of its boundary in anti-clockwise direction starting from root. Boundary includes left boundary, leaves, and right boundary in order without duplicate nodes.  (The values of the nodes may still be duplicates.)

Left boundary is defined as the path from root to the left-most node. Right boundary is defined as the path from root to the right-most node. If the root doesn't have left subtree or right subtree, then the root itself is left boundary or right boundary. Note this definition only applies to the input binary tree, and not applies to any subtrees.
The left-most node is defined as a leaf node you could reach when you always firstly travel to the left subtree if exists. If not, travel to the right subtree. Repeat until you reach a leaf node.

The right-most node is also defined by the same way with left and right exchanged.

Example 1

Input:
  1
   \
    2
   / \
  3   4

leftBoundary => 1
leaves => 3, 4
rightBoundary => 2


Ouput:
[1, 3, 4, 2]

Explanation:
The root doesn't have left subtree, so the root itself is left boundary.
The leaves are node 3 and 4.
The right boundary are node 1,2,4. Note the anti-clockwise direction means you should output reversed right boundary.
So order them in anti-clockwise without duplicates and we have [1,3,4,2].



Example 2

Input:
    ____1_____
   /          \
  2            3
 / \          /
4   5        6
   / \       / \
  7   8    9     10
  /      /        \
  7     9          11
        \
        67

 computing levels and storing the node at first and last
        1
      2, 3
      4, 6
      7,  9, 10
      11

  all nodes at index 0 => 1, 2, 4, 7, 11
  last level = 11
  all nodes at last index => 1, 3, 6, 10 =
                            10 , 6, 3, 1

      output = 1, 2, 4, 7, 11, 10, 6, 3

leftBoundary = 1 -> 2 -> 4
leaves => 7, 8, 9, 10
rightBoundary => 1 -> 3 -> 6 -> 10

1, 2, 4, 7, 8, 9, 10, 6, 3

Ouput:
[1,2,4,7,8,9,10,6,3]

Explanation:
The left boundary are node 1,2,4. (4 is the left-most node according to definition)
The leaves are node 4,7,8,9,10.
The right boundary are node 1,3,6,10. (10 is the right-most node).
So order them in anti-clockwise without duplicate nodes we have [1,2,4,7,8,9,10,6,3].

Example 3:

          1
      2       3

leftBoundary => 1 -> 2
leaves => 2, 3
rightBoundary reversed => 3 -> 1

output = [1, 2, 3]

Example 4:
            1
                  2
              3       4
                  5        6

leftBoundary = 1
leaves = 3, 5, 6
rightBoundary  = 1 -> 2 -> 4 -> 6
                 6 -> 4 -> 2 -> 1

output = [1, 3, 5, 6, 4, 2]

Example 5:
input = null, output = null

Example 6:

            1
        1       1

output = [1, 1, 1]

Approaches:

      Idea 1: Intuitive (DFS Preorder)

                a
            b         c
        d      e

desired leftBoundary a => b => d
preOrder => curr node => left node => right node

        preOrderdfs (a, path)
          append a to path
          preorderdfs(b)
          preorderdfs(c)


          preorderdfs(b, path)
              path = a => b
              preorderdfs(d) RETURNED
              preorderdfs(e)

          preorderdfs(d, path)
            path = a => b => d
            if d is a leaf => append to leaves list
            return

          preorderdfs(e, path)
*/

class TreeNode{
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function getBoundaryValues(root) {

  let leftBoundary = [];
  let rightBoundary = [];
  let leaves = [];

  /*
              a
         >b
              c
            d
  */

  function preOrderDFSLeft(node, path) {
    if (!node) return;
    path.push(node.val);

    if (!node.left && !node.right) {
      leaves.push(node.val);
    }
    if (node.left) {
      preOrderDFSLeft(node.left, path);
    } else {
      preOrderDFSLeft(node.right, path);
    }

  }

  function preOrderDFSRight(node, path) {
    if (!node) return;
    path.push(node.val);

    if (!node.left && !node.right) {
      leaves.push(node.val);
    }

    preOrderDFSRight(node.right, path);
  }


  preOrderDFSLeft(root, leftBoundary);
  preOrderDFSRight(root, rightBoundary);


  // combine leftBoundary + leaves + rightBoundary reversed

  let combinedNodes = leftBoundary.concat(leaves);
  combinedNodes = combinedNodes.concat(rightBoundary.reverse());

  let output = new Set(combinedNodes);

}


/* feedback
  1. incorrect

*/
// correct solution

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];

  let leftNodes = [root.val];
  let leaves = [];
  let rightNodes = [];

  var preOrderLeft = function(node) {
      if (!node) return;

      if (node.left) {
          leftNodes.push(node.val);
          preOrderLeft(node.left);
      } else if (node.right) {
          leftNodes.push(node.val);
          preOrderLeft(node.right)
      }
  }

  var getLeaves = function(node) {
      if (!node) return;
      if (!node.left && !node.right) {
          leaves.push(node.val);
      }
      getLeaves(node.left);
      getLeaves(node.right);
  }

  var preOrderRight = function(node) {
      if (!node) return;

      if (node.right) {
          rightNodes.push(node.val);
          preOrderRight(node.right);
      } else if (node.left) {
          rightNodes.push(node.val);
          preOrderRight(node.left);
      }
  }

  preOrderLeft(root.left);
  getLeaves(root);
  preOrderRight(root.right);

  let output = leftNodes.concat(leaves, rightNodes.reverse());

  return output;
};