function findElementDFS(root, target) {
  if (!root) {
    return false;
  }
  if (root.value === target) {
    return true;
  }
  return findElementDFS(root.left, target) || findElementDFS(root.right, element);
}