/*

Detect Cycle in a Graph

1. Brute Force: Suboptimal Backtracking
2. Backtracking with Memoization
3. Graph Coloring

*/
function detectCycleWithoutSet(adjList) {
  function dfsHelper(node, path) {
    if (path.has(node)) return true;
    path.add(node);

    for (let neighbor of adjList[node]) {
      if (dfsHelper(neighbor, path)) {
        return true;
      }
    }
    return false;
  }

  for (let vertex in adjList) {
    if (dfsHelper(vertex, new Set())) {
      return true;
    }
  }
  return false;
}