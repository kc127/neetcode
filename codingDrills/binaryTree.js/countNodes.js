function countNodes(root) {
  if (!root) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right);
}