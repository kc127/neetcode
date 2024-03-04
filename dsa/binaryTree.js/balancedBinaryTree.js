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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;

  let left = getHeight(root.left);
  let right = getHeight(root.right);

  if ((Math.abs(left - right) > 1)) {
      return false;
  } else {
      return isBalanced(root.left) && isBalanced(root.right);
  }
};

var getHeight = function(root) {
  if (!root) return 0;

  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}