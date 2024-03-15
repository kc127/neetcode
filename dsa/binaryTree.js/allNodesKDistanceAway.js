/* most optimal and elegant */

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
var distanceK = function(root, target, k) {
  let visitedNodes = new Set();
  let kNodes = [];

  function getParentNodes(node, parent) {
    if (node) {
      node.parent = parent;
      getParentNodes(node.left, node);
      getParentNodes(node.right, node);
    }
  }

  function dfs(node, distance) {
    if (!node || visitedNodes.has(node.val)) {
      return;
    }
    visitedNodes.add(node.val);
    if (distance === k) {
      kNodes.push(node.val);
    } else {
        dfs(node.left, distance + 1);
        dfs(node.right, distance + 1);
        dfs(node.parent, distance + 1);
    }
  }

  getParentNodes(root, null);
  dfs(target, 0);
  return kNodes;
};




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
function allNodesKDistance(root, target, k) {
  let nodesKDistanceAway = [];
  let targetNode = getNodeReference(root, target);
  let parentMap = getChildToParentMap(root, null);
  let queue = targetNode ? [targetNode] : [];
  let seen = new Set();

  while (queue.length !== 0 && k) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      let parentOfCurr = parentMap[curr.value]
      seen.add(curr.value);

      if (curr.left && !seen.has(curr.left.value)) queue.push(curr.left);
      if (curr.right && !seen.has(curr.right.value)) queue.push(curr.right);
      if (parentOfCurr && !seen.has(parentOfCurr.value)) queue.push(parentOfCurr);
    }

    k--;
  }

  return queue.map(node => node.value);
}

function getChildToParentMap (currNode, parentNode, parentMap = {}) {
  if (!currNode) return;

  parentMap[currNode.value] = parentNode ? parentNode : null;
  getChildToParentMap(currNode.left, currNode, parentMap);
  getChildToParentMap(currNode.right, currNode, parentMap);

  return parentMap;
}

function getNodeReference(node, target) {
  if (!node) return null;
  if (node.value === target) return node;

  let leftSubtree = getNodeReference(node.left, target);
  if (leftSubtree) return leftSubtree;

  let rightSubtree = getNodeReference(node.right, target);
  if (rightSubtree) return rightSubtree;

  return null;
}
/// after the feedback
// Given a binary tree, a target node, and integer k, return an array of all node values that are k distance away from the target node in any direction. This means we must include nodes that can only be reached by going up the tree via parent pointers.

// EXAMPLES
//           1 <--- root
//     2           3
//  4    5      6     7
// 8 9 10 11  12 13 14 15

// allNodesKDistance(root, 2, 2) == {3,8,9,10,11}
// allNodesKDistance(root, 6, 2) == {1,7}

// FUNCTION SIGNATURE
// function allNodesKDistance(root, target, k) {
// def allNodesKDistance(root: Node, target: int, k: int) -> list[int]:
//

function allNodesKDistance(root, target, k) {
  // let nodesKDistanceAway = [];
  let targetNode = getNodeReference(root, target);
  let parentMap = getChildToParentMap(root, null);
  let queue = targetNode ? [targetNode] : [];
  let seen = new Set();

  while (queue.length !== 0 && k) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      // this adds extra time
      let parentOfCurrNode = getNodeReference(root, parentMap[curr.value])
      seen.add(curr.value);

      if (curr.left && !seen.has(curr.left.value)) queue.push(curr.left);
      if (curr.right && !seen.has(curr.right.value)) queue.push(curr.right);
      if (parentOfCurrNode && !seen.has(parentMap[curr.value])) queue.push(parentOfCurrNode);
    }

    k--;
  }

  // while (queue.length !== 0) {
  //   let curr = queue.shift();
  //   nodesKDistanceAway.push(curr.value);
  // }

  return queue.map(node => node.value);

  // return nodesKDistanceAway;
}
/*
            1
        2        3
    4

    1 => null
    2 =>  1
    3 => 1

*/
// create two directional map, e.g. 2 -> 1, 4
function getChildToParentMap (currNode, parentNode, parentMap = {}) {
  if (!currNode) return;

  parentMap[currNode.value] = parentNode ? parentNode.value : null;
  getChildToParentMap(currNode.left, currNode, parentMap);
  getChildToParentMap(currNode.right, currNode, parentMap);

  return parentMap;
}

function getNodeReference(node, target) {
  if (!node) return null;
  if (node.value === target) return node;

  const leftSubtree = getNodeReference(node.left, target);
  if (leftSubtree) return leftSubtree;

  const rightSubtree = getNodeReference(node.right, target);
  if (rightSubtree) return rightSubtree;

  return null;
}

//// Tests ////

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let oneNode = new Node(1)
let result = allNodesKDistance(oneNode, 1, 1)
console.log(result.length === 0 || result === null)

//   1
// 2   3
let twoLevels = new Node(1,
  new Node(2),
  new Node(3))

result = allNodesKDistance(twoLevels, 1, 1).sort()
console.log(JSON.stringify(result) === JSON.stringify([2,3].sort()))

result = allNodesKDistance(twoLevels, 2, 1)
console.log(JSON.stringify(result) === JSON.stringify([1].sort()))

result = allNodesKDistance(twoLevels, 2, 2)
console.log(JSON.stringify(result) === JSON.stringify([3].sort()))

result = allNodesKDistance(twoLevels, 3, 3)
console.log(result.length === 0 || result === null)

//           1
//     2           3
//  4    5      6     7
// 8 9 10 11  12 13 14 15
let complete4levels = new Node(1,
  new Node(2,
    new Node(4,
      new Node(8),
      new Node(9)),
    new Node(5,
      new Node(10),
      new Node(11))),
  new Node(3,
    new Node(6,
      new Node(12),
      new Node(13)),
    new Node(7,
      new Node(14),
      new Node(15))))

result = allNodesKDistance(complete4levels, 1, 3).sort()
console.log(JSON.stringify(result) === JSON.stringify([8,9,10,11,12,13,14,15].sort()))

result = allNodesKDistance(complete4levels, 5, 1).sort()
console.log(JSON.stringify(result) === JSON.stringify([2,10,11].sort()))

result = allNodesKDistance(complete4levels, 2, 2).sort()
console.log(JSON.stringify(result) === JSON.stringify([3,8,9,10,11].sort()))

result = allNodesKDistance(complete4levels, 6, 2).sort()
console.log(JSON.stringify(result) === JSON.stringify([1,7].sort()))

result = allNodesKDistance(complete4levels, 3, 3).sort()
console.log(JSON.stringify(result) === JSON.stringify([4,5].sort()))

result = allNodesKDistance(complete4levels, 10, 5).sort()
console.log(JSON.stringify(result) === JSON.stringify([6,7].sort()))

result = allNodesKDistance(complete4levels, 10, 6).sort()
console.log(JSON.stringify(result) === JSON.stringify([12,13,14,15].sort()))

result = allNodesKDistance(complete4levels, 10, 7)
console.log(result.length === 0 || result === null)

