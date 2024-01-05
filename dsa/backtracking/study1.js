class TreeNode{
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrder(root, output = []) {

  if (!root) {
    return;
  }

  if (root.left) inOrder(root.left, output);
  output.push(root.value);
  if (root.right) inOrder(root.right, output);
  return output;
}
/*
        input                       line
      5, largest = -Infinity       largest = 5, func(root.left = 6) = 6, func(root.right = 9) =
      6, largest = 5                largest = 6, func(root.left = 2) = 6, func(root.right = 3) = 6
      2, largest = 6                largest = 6 return 6
      3, largest = 6                largest = 6 return 6
      9, largest = 6                largest = 9, func(root.left = 1)


*/

/* Pattern 1 */

function findLargestValue(root, largest = -Infinity) {
  if (!root) {
    return -Infinity;
  }

  largest = Math.max(largest, root.value);

  return Math.max(root.value,findLargestValue(root.left, largest), findLargestValue(root.right, largest));
}

/** Pattern 2:
 * problem: find the largest root to leaf sum on a binary tree
 *
 * Is this problem looking for an answer or a set of answers?
 * Is this problem looking for paths or a single node?
 */

function findLargestPathSum(root) {
  const stack = [];
  let largestSoFar = Number.MIN_VALUE;

  function dfsHelper(root) {
    // BASE CASE: if node is leaf..
    if (!root.left && !root.right) {
      let sum = stack.reduce((a, total) => a + total, 0);
      largestSoFar = Math.max(largestSoFar, sum + root.value);
      return largestSoFar;
    }
    stack.push(root.value);
    // RECURSIVE CASES: try all options
    if (root.left) {
      dfsHelper(root.left);
    }
    if (root.right) {
      dfsHelper(root.right)
    }
    stack.pop(root.value);
  }

  if (root) {
    findLargestPathSum(root);
  }
  return largestSoFar;
}


/*
          5
    6           9
 2     3    1       1

*/

let node1 = new TreeNode(5,
                           new TreeNode(6,
                                          new TreeNode(2),
                                          new TreeNode(3)),
                           new TreeNode(9,
                                          new TreeNode(1),
                                          new TreeNode(1)));

console.log(inOrder(node1));
console.log(findLargestValue(node1))
