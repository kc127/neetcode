/**
 *
 * https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/description/?envType=daily-question&envId=2023-11-02
 *
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
var averageOfSubtree = function(root) {

  let count = 0;

  var dfs = function (node, nodeSum, nodeCount) {
      if (!node) return [0,0];

      let leftSubtreeSum = dfs(node.left);
      let rightSubtreeSum = dfs(node.right);

      nodeSum = leftSubtreeSum[0] + rightSubtreeSum[0] + node.val;
      nodeCount = leftSubtreeSum[1] + rightSubtreeSum[1] + 1;

      if (node.val === Math.floor(nodeSum/nodeCount)) {
          count++;
      }

      return [nodeSum, nodeCount];
  }
  dfs(root);
  return count;
};