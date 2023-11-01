/*

https://leetcode.com/problems/find-mode-in-binary-search-tree/description/?envType=daily-question&envId=2023-11-01


*/

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
 *
 * time: O(n)
 * spac: O(1)
 *
 */

var findMode = function(root) {
  let currStreak = 0;
  let maxStreak = 0;
  let currNum = 0;
  let modes = [];
  var inorder = function(node) {
      if (!node) return;

      inorder(node.left);

      if (node.val === currNum) {
          currStreak++;
      } else {
          currNum = node.val;
          currStreak = 1;
      }

      if (currStreak > maxStreak) {
          maxStreak = currStreak;
          modes = [];
      }
      if (currStreak === maxStreak) {
          modes.push(node.val);
      }

      inorder(node.right);
  }
  inorder(root);

  return modes;
};