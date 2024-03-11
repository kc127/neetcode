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
 * @return {TreeNode}
 */
var invertTree = function(root) {

  function postOrder(node) {
      if (!node) return null;

      let left = postOrder(node.left);
      let right = postOrder(node.right);

      node.left = right;
      node.right = left;

      return node;
  }

  postOrder(root);
  return root;
};