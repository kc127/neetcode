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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  let levels = [];
  let queue = [root];
  let levelNum = 0;

  while (queue.length) {
      let size = queue.length;
      let level = [];

      for (let i = 0; i < size; i++) {
          let curr = queue.shift();

          if (curr.left) queue.push(curr.left);
          if (curr.right) queue.push(curr.right);

          level.push(curr.val);
      }
      if (levelNum % 2 !== 0) {
          levels.push(level.reverse())
      } else {
          levels.push(level);
      }

      levelNum++;
  }

  return levels;
};