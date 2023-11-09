// 1. As an object & pointers

class Node {
  constructor(value) {
    this.value;
    this.children = [];
  }
}

head = new Node(...);


// 2. Nodes & Edges

vertex_list: [1, 2, 3, 4, 5]
edge_list: [(1, 2), (1, 3), (3, 4), (4, 2), (4, 5)]


// 3. adjacency list

graph = {
  '1': ['2', '3'],
  '2': [],
  '3': ['4'],
  '4': ['2', '5'],
  '5': []
};

// 4. adjacency matrix

graph = [
  // 1  2  3  4  5
  [0, 1, 1, 0, 0], // 1
  [0, 0, 0, 0, 0], // 2
  [0, 0, 0, 1, 0], // 3
  [0, 1, 0, 0, 1], // 4
  [0, 0, 0, 0, 0], // 5
]

function depthFirstSearch(root, target) {
  let seenNodes = new Set();

  function helper(node) {
    if (seenNodes.has(node)) return false;
    seenNodes.push(node);

    if (!root) return false;
    if (root.value === target) return true;

    for (let node in this.neighbors) {
      if (helper(node)) return true;
    }
  }

  return helper(root);
}

function breadthFirstSearch(root, target) {
  let queue = [root];
  let seenNodes = new Set();

  while (queue.length > 0) {
    let node = queue.shift();
    if (seenNodes.has(node)) continue;
    seenNodes.push(node);

    if (node.value === target) return true;
    for (let neighbor in node.neighbors) {
      queue.push(neighbor);
    }
  }

  return false;
}