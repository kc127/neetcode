/*
'''
Find Nodes Occurring K Times

Given a binary tree and an integer (k), find and return an array of unique nodes that occur **at least (k) times** in the tree.

For example, if Node(5) occurs 3 times in the tree, and (k) = 3, your result array would include the value of Node(5) (simply **5** in this case).

Assumptions/Observations/Edge Cases
1. Find values that appear AT LEAST k times.
2. Duplicate values allowed.

EXPLORE => BRAINSTORM => PLAN => IMPLEMENT => VERIFY

EXAMPLE(S)
    2
 2     3
7 3  14 9

k = 2, should return [2, 3]

   12
 3    3
1 _  6 _

k = 2, should return [3]

       12
    3      4
  1  _    6  _
9  _     _ _

k = 1, should return [12, 3, 4, 1, 6, 9]

          5
      5       5
  5

k = 1, should return [5]
k = 5, should return [ ]

BRAINSTORM:
1. Idea: Use MAP + DFS/BFS Traversal
      map = node : freq

Time: O(n) where n is the number of nodes
Space: O(n) because of map size, (exluding or indluding - result array )

2. Idea: Maybe using O(1) space with O(n) time, but how?

PLAN:
res array
map
iterative / recursively go thru tree and add to counts
go thru map and push values that are at least k times

FUNCTION SIGNATURE
function findNodesOccuringKTimes(head, k) {
'''
*/
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// function findNodesOccuringKTimes(head, k) {
//   const count = {};
//   const res = []
//   const stack = head ? [head] : [];
//   while (stack.length) {
//     const curr = stack.pop();
//     count[curr.value] =  (count[curr.value] || 0) + 1;
//     curr.left && stack.push(curr.left)
//     curr.right && stack.push(curr.right)
//   }
//   for (let [key,value] of Object.entries(count)) {
//     if (value >= k) {
//       res.push(key)
//     }
//   }
//   return res
// }

function findNodesOccuringKTimes(head, k) {
  let count = {};
  let result = [];

  function dfs(node) {
    if (!node) return;
    count[node.value] = (count[node.value] || 0) + 1;
    dfs(node.left);
    dfs(node.right);
  }
  dfs(head);

  for (let [key, val] of Object.entries(count)) {
    if (val >= k) result.push(key);
  }
  return result;
}

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// official solution
const findNodesOccuringKTimes = (root, k) => {
  if (!root || k <= 0) return [];

  const result = [];
  const queue = [];
  const frequencies = new Map();

  queue.push(root);
  while (queue.length) {
    const node = queue.shift();

    const existingCount = frequencies.get(node.value) || 0;
    frequencies.set(node.value, existingCount + 1);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  for (const [key, value] of frequencies) {
    if (value >= k) {
      result.push(key);
    }
  }

  return result;
};

// 12
// 3    3
// 1 _  6 _

const root2 = new TreeNode(12,
    new TreeNode(3,
      new TreeNode(1)),
    new TreeNode(3,
      new TreeNode(6)))
console.log(findNodesOccuringKTimes(root2,2), [3])
/*
    2
 2     3
7 3  14 9

*/
let tree1 = new TreeNode(2,
  new TreeNode(2,
    new TreeNode(7),
    new TreeNode(3)),
  new TreeNode(3,
    new TreeNode(14),
    new TreeNode(9)))

console.log(findNodesOccuringKTimes(tree1, 2), ' expect [2, 3]');

/*

       12
    3      4
  1  _    6  _
9  _     _ _

k = 1, should return [12, 3, 4, 1, 6, 9]

*/
let tree2 = new TreeNode(12,
                new TreeNode(3,
                  new TreeNode(1,
                    new TreeNode(9))),
                new TreeNode(4,
                  new TreeNode(6)))

console.log(findNodesOccuringKTimes(tree2, 1), ' expect [12, 3, 4, 1, 6, 9]');
