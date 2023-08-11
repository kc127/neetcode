function findHeight(root) {
  if (!root) return -1;

  return 1 + Math.max(findHeight(root.left), findHeight(root.right));
}