function sumNodes(root) {
  if (!root) return 0;

  return root.value + sumNodes(root.left) + sumNodes(root.right)
}

function sumNodesIterative(root) {

  let sum = 0;
  let stack = root ? [root] : [];

  while (stack.length){
    let curr = stack.pop();
    sum += curr.value;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return sum;
}