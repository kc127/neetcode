class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// count number of nodes in Tree

function countNodes (root) {
  if (!root) {
    return 0;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
}

let tree1 = new TreeNode(1,
              new TreeNode(2),
              new TreeNode(3));

console.log(countNodes(tree1), ' expect 3');

let tree2 = new TreeNode(1,
              new TreeNode(2,
                  new TreeNode(4),
                  new TreeNode(5)),
              new TreeNode(3,
                  new TreeNode(6),
                  new TreeNode(7)));
console.log(countNodes(tree2), ' expect 7');
