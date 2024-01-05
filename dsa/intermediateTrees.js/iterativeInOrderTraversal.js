var inorderTraversal = function(root) {
  let stack = [];
  let values = [];
  let curr = root;

  while (curr || stack.length) {
      while (curr) {
          stack.push(curr);
          curr = curr.left;
      }
      curr = stack.pop();
      values.push(curr.val);
      curr = curr.right;
  }
  return values;
};