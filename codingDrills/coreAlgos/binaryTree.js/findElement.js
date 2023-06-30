function findElement(root, target) {
  if (!root) {
    return false;
  }
  if (root.value === target) {
    return true;
  }
  return findElement(root.left, target) || findElement(root.right, element);
}