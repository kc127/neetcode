function findMax(root) {
  if (!root) return null;

  return Math.max(root.value, findMax(root.left), findMax(root.right))
}