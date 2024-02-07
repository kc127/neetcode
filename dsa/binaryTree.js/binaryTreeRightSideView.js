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
var rightSideView = function(root) {
  let rightSideNodes = [];
  let queue = root ? [root] : [];

  while(queue.length) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
          let curr = queue.shift();
          if (i === size - 1) {
              rightSideNodes.push(curr.val);
          }
          if (curr.left) {
              queue.push(curr.left);
          }
          if (curr.right) {
              queue.push(curr.right);
          }
      }
  }
  return rightSideNodes;
};