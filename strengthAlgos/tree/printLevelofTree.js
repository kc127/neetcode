class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/*
Q. Given a binary tree, print level order traversal so that nodes of all levels are printed in several lines

Examples:
• Given a binary tree:
                 1
                / \
               2   3
// returns [[1], [2, 3]]

• Given a binary tree:
                 1
                / \
               2   3
              / \
             4   5

// returns [[1], [2, 3], [4, 5]]
*/

function printTree(root) {
  if (!root) {
    return [[]];
  }
  let levels = [];
  let queue = [root];

  while (queue.length){
    let size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      level.push(curr.value);

      if (curr.left)  queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    levels.push(level);
  }

  return levels;
}

/**
 *          1
 *      2       3
 */

let tree1 = new TreeNode(1,
                new TreeNode(2),
                new TreeNode(3));

console.log(printTree(tree1), ' expect [[1], [2, 3]]')
/**
 *                  1
 *            2        3
 *        4      5
 */

let tree2 = new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(4),
                    new TreeNode(5)),
                new TreeNode(3))

console.log(printTree(tree2), ' expect [[1], [2, 3], [4, 5]]')