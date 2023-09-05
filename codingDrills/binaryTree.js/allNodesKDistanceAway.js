/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
function distanceK(root, target, k) {
  let nodesKDistanceAway = [];
  //let targetNode = getNodeReference(root, target);
  let parentMap = getChildToParentMap(root, null);
  let queue = target ? [target] : [];
  let seen = new Set();

  while (queue.length !== 0 && k) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      let parentOfCurr = getNodeReference(root, parentMap[curr.val])
      seen.add(curr.val);

      if (curr.left && !seen.has(curr.left.val)) queue.push(curr.left);
      if (curr.right && !seen.has(curr.right.val)) queue.push(curr.right);

      if (parentOfCurr && !seen.has(parentMap[curr.val])) queue.push(parentOfCurr);
    }
    k--;
  }

  while (queue.length !== 0) {
    let curr = queue.shift();
    nodesKDistanceAway.push(curr.val);
  }

  return nodesKDistanceAway;
}

function getChildToParentMap (currNode, parentNode, parentMap = {}) {
  if (!currNode) return;

  parentMap[currNode.val] = parentNode ? parentNode.val : null;
  getChildToParentMap(currNode.left, currNode, parentMap);
  getChildToParentMap(currNode.right, currNode, parentMap);

  return parentMap;
}

function getNodeReference(node, target) {
  if (!node) return null;
  if (node.val === target) return node;

  let leftSubtree = getNodeReference(node.left, target);
  if (leftSubtree) return leftSubtree;

  let rightSubtree = getNodeReference(node.right, target);
  if (rightSubtree) return rightSubtree;

  return null;
}