// nodes two edges (levels) away


function bfs(root, adjacencyList, targetLevel) {
  let output = [];
  let visited = new Set();
  let queue = [];
  queue.push([root, 0]);
  visited.add(root);
  while (queue.length) {
    let [nodeId, level] = queue.shift();

    if (level === targetLevel) {
      output.push(nodeId);
    }
    let neighbors = adjacencyList.get(nodeId);

    neighbors.map(neighbor => {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, level + 1]);
      }
      visited.add(neighbor);
    })
  }
  return output;
}

let adjacencyList = new Map(
  [
      [10, [5, 6, 1]],
      [5, [2, 3]],
      [6, []],
      [1, [0]],
      [2, []],
      [3, []],
      [0, [1]],
  ]
);

let rootNode = 10
console.log(bfs(rootNode, adjacencyList, 2));