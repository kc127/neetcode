Given the adjacency matrix of a graph, determine if the graph contains a cycle.

Example:

[
  [false, true],
  [false, false]
]
Represents a graph of two nodes:

0 -> 1
There is no cycle so return false. However:

[
  [false, true],
  [true, false]
]
Represents a graph where both nodes point to each other:

0 <-> 1
There is a cycle!

function solution(adjacency) {

  let adjList = {};
  for (let i = 0; i < adjacency.length; i++) {
      adjList[i] = [];
      let neighbors = adjacency[i];
      for (let j = 0; j < neighbors.length; j++) {
          let neighbor = neighbors[j];
          if (neighbor === true) {
              adjList[i].push(j);
          }
      }
  }
  console.log(adjList)
  let visited = new Set();
  function dfs(node) {
      if (visited.has(node)) {
          return true;
      }
      if (!adjList[node] || adjList[node].length === 0) {
          return false;
      }

      visited.add(node);
      for (let neighbor of adjList[node]) {
          if (visited.has(neighbor) || dfs(neighbor)) {
              return true;
          } else if (!visited.has(neighbor) || !dfs(neighbor)) {
              continue;
          }
      }
      return false;
  }
  let bool = false;
  for (let vertex in adjList) {
      bool = dfs(vertex);
  }
  return bool;
}

/*

function dfs
  if (node === target) return true;

  dfs(node.left)
  dfs(node.right)


convert adjacency matrix to list
traverse the list using DFS
if visited has already visited node
return true


*/



// test cases
let adjacency = [[false,true,false,false,false],
[false,false,false,true,false],
[false,false,false,false,false],
[false,false,false,false,false],
[false,true,false,false,false]]

adjacency: [[false]]
adjacency: [[true]]

adjacency:
[[false,true],
 [false,false]]

 adjacency:
[[false,true],
 [true,false]]

 adjacency:
[[false,false,false,true,true],
 [true,false,true,true,false],
 [false,true,true,false,true],
 [false,true,true,true,false],
 [false,true,false,false,true]]


 adjacency:
[[false,true,false,false,false],
 [false,false,false,true,false],
 [false,false,false,false,false],
 [false,false,false,false,false],
 [false,true,false,false,false]]


 adjacency:
[[false,false,false,false,true],
 [true,false,true,false,false],
 [false,false,false,true,false],
 [false,false,false,true,false],
 [false,true,false,false,false]]


 adjacency:
[[false,false,false,true,false],
 [false,false,true,false,false],
 [true,false,false,true,false],
 [true,true,false,false,false],
 [true,true,false,true,false]]

 adjacency:
[[false,true,false,false],
 [false,false,false,false],
 [false,false,false,true],
 [false,false,true,false]]