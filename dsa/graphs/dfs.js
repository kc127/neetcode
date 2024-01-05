function dfs(adjacencyList) {
  let visited = new Set();

  function dfsHelper(currNode) {
    let neighbors = adjacencyList.get(currNode);

    // base case: Already visited
    if (visited.has(currNode)) {
      return;
    }
    visited.add(currNode);
    console.log(currNode);
    // base case: no neighbors
    if (neighbors.length === 0) {
      console.log("DONE");
    }
    // recursive case
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfsHelper(neighbor);
      }
    }
  }

  adjacencyList.forEach((_, node) => {
    if (!visited.has(node)) {
      dfsHelper(node);
    }
  })
}

let adjacency_list = new Map([
  [10, [5]],
  [5, [2]],
  [6, [5]],
  [1, [0]],
  [2, []],
  [3, [2, 6]],
  [0, [1]],
]);
dfs(adjacency_list);