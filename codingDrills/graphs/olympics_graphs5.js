/*

Given the adjacency matrix of a graph, determine if the graph contains a cycle.



*/
function solution(adjacency) {
  let adjList = {};

  for (let i = 0; i < adjacency.length; i++) {
      adjList[i] = [];
      for (let j = 0; j < adjacency[0].length; j++) {
          if (adjacency[i][j]) {
              adjList[i].push(j);
          }
      }
  }

  function dfsHelper(node, path, visited) {
      if (path.has(node)) {
          return true;
      }
      path.add(node);

      for (let neighbor of adjList[node]) {
          if (dfsHelper(neighbor, path, visited)) {
              return true;
          }
      }
      return false;
  }
  let visited = new Set();
  for (let vertex in adjList) {
      if (dfsHelper(vertex, new Set(), visited)) {
          return true;
      }
  }
  return false;
}
