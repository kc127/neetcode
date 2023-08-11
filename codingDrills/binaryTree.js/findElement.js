function findElementDFS(root, target) {
  if (!root) {
    return false;
  }
  if (root.value === target) {
    return true;
  }
  return findElementDFS(root.left, target) || findElementDFS(root.right, element);
}

function findElementBFS(root, target) {
  let queue = root ? [root] : [];

  while (queue.length) {
    let curr = queue.shift();
    if (curr.value === target) {
      return true;
    }
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  
  return false;
}