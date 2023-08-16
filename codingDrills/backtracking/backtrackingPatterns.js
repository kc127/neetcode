class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/*

            5
        6         9
    2       3 1       1


1. Find the largest value in a tree.

*/

function findLargestNode(root) {
  let largest = -Infinity;

  function dfs(node, largest) {
    if (!node) {
      return largest;
    }
    largest = Math.max(largest, node.value);
    let leftSubtree = dfs(node.left, largest);
    let rightSubtree = dfs(node.right, largest);

    return Math.max(node.value, leftSubtree, rightSubtree);
  }
  return dfs(root, largest);
}

/*

2. Find Max root to leaf sum three ways
   i)  path pattern using stack
   ii) node pattern that saves the sum so far and passes the state
        i) top down => sum the node value and pass it to left and right subtree
        ii) bottom up => start unraveling at the end

*/

function findLargestPathSum(root) {
  let largestSoFar = Number.MIN_VALUE;
  let stack = [];

  function dfsHelper(node) {
    if (!node.left && !node.right) {
      let sum = stack.reduce((curr, acc) => curr + acc, 0);
      largestSoFar = Math.max(largestSoFar, sum);
      return;
    }

    stack.push(node.value)
    if (node.left) {
      dfsHelper(node.left);
    }
    if (node.right) {
      dfsHelper(node.right);
    }
    stack.pop(node.value);
  }
  if (root) dfsHelper(root);

  return largestSoFar;
}

/*
3. Find Largest Path Sum -> Top Down
  - Passing state down to each node
  - Each node is a recursive call
  - No need to keep track of the nodes therefore we don't need a stack

  Space: O(1) because no stack (also excludes recursive stack space)
  Find max root to leaf sum (node pattern)
*/
function findLargestPathSumTopDown(root) {
  let largestSoFar = Number.MIN_VALUE;

  function dfsHelper(node, totalSoFar) {
    let pathTotalToHere = node.value + totalSoFar;

    if (!root.left && !root.right) {
      largestSoFar = Math.max(largestSoFar, pathTotalToHere);

    }

    if (root.left) {
      dfsHelper(node.left, pathTotalToHere);
    }
    if (root.right) {
      dfsHelper(node.right, pathTotalToHere);
    }
  }

  if (root) {
    dfsHelper(root, 0);
  }
  return largestSoFar;
}

function findLargestPathSumBottomUp(root) {
  if (!root) return 0;

  return Math.max(root.value + findLargestPathSumBottomUp(root.left),
                  root.value + findLargestPathSumBottomUp(root.right));

}