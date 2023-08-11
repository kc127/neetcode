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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  if (!root) return 0;

  let deepestSum = [];
  let queue = [root];
  let level = 0;

  while (queue.length) {
      let size = queue.length;
      let levelSum = 0;
      for (let i = 0; i < size; i++) {
          let curr = queue.shift();
          levelSum += curr.val;

          if (curr.left) queue.push(curr.left);
          if (curr.right) queue.push(curr.right);
      }
      deepestSum = levelSum;
  }

  return deepestSum;
};