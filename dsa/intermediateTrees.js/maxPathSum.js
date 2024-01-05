/*
Q. Given a non-empty binary tree, find the maximum path sum.

Note:
• A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example:
• Given a binary tree:
           1
          / \
         2   3
        /
      -1
returns 6 (1 + 2 + 3)

Drawing Explanation:

           1
          / \
         2   3
        /
      -1

maxSum = (-Inf, -1 + 0 + 0) = -1
         (-1, 2 + (-1) + 0) = 1
          input                         line
      1                             leftMax = Math.max(0, dfs(2)) =  2, rightMax = 3, maxSum = (1, 1 + 2 + 3) = 6, RETURN 1 + 3 = 4
      2                             leftMax = Math.max(0, dfs(-1)) = -1, rightMax = Math.max(0, dfs(null) = 0) = 0, maxSum = 1, RETURN 2 + (0) = 2
     -1                             leftMax = Math.max(0, dfs(null) = 0) = 0, rightMax = 0, maxSum = -1, RETURN -1 + max(0,0) = -1

*/
function maxPathSum(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) {
      return 0;
    }
    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, node.value + left + right);
    return node.value + Math.max(left, right);
  }
  dfs(root);
  return maxSum === -Infinity ? 0 : maxSum;
}

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/*
                          1
                     2          3
                -1

*/

let tree1 = new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(-1)),
                new TreeNode(3));

console.log(maxPathSum(tree1))

