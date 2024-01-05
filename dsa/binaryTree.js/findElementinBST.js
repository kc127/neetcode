function findElementInBST(root, target) {
  if (!root) return false;

  if (root.value === target) {
    return true;
  }
  if (target < root.value) {
    return findElementInBST(root.left, target);
  } else {
    return findElementInBST(root.right, target);
  }
}