/*

A connected component of a graph is a set of nodes where each has at least one incoming or outgoing edge to at least one other node in the set besides itself. As a simple example, a two node graph with no edges has two connected components, only the nodes themselves. Add an edge between the two nodes, and now the two nodes form a single connected component.

Given the adjacency matrix (square matrix of boolean values), count and return the number of connected components. For example:

[
  [false, true, false, false],
  [true, false, false, false],
  [false, false, false, true],
  [false, false, true, false],
]

Has four nodes but two connected components. Nodes 0 and 1 are connected, as are 2 and 3.

*/

function solution(adjacency) {


  let visited = new Set();
  function dfs(i, j) {
      if (i < 0 || i >= adjacency.length || j < 0 || j >= adjacency[0].length) {
          return 0;
      }
      if (visited.has(`${i},${j}`)) {
          return 0;
      }
      visited.add(`${i},${j}`);

      dfs(i-1, j);
      dfs(i-1,j+1);
      dfs(i, j+1);
      dfs(i+1,j+1);
      dfs(i+1,j);
      dfs(i+1, j-1);
      dfs(i, j-1);
      return 1;
  }

  let connectedComponents = 0;
  for (let i = 0; i < adjacency.length; i++) {
      for (let j = 0; j < adjacency[0].length; j++) {
          if (j !== i && adjacency[i][j] && !visited.has(`${i},${j}`)) {
              connectedComponents +=  dfs(i, j);
              console.log(connectedComponents, [i, j])
          }
      }
  }
  return connectedComponents === 0 ? adjacency.length : connectedComponents;
}


////
function solution(adjacency) {
    if (adjacency.length === 0 || adjacency[0].length === 0) {
      return 0;
    }
    let connectedComponents = 0;
    let visited = new Set();

    var dfs = function(r, c) {
      let rows = adjacency.length;
      let cols = adjacency[0].length;

      if (visited.has(`${r},${c}`) || r < 0 || r >= rows || c < 0 || c >= cols || adjacency[r][c] === false) {
          return;
      }

      visited.add(`${r},${c}`);
      dfs(r-1,c-1);
      dfs(r-1,c);
      dfs(r-1,c+1);
      dfs(r, c-1);
      dfs(r, c+1);
      dfs(r+1,c-1);
      dfs(r+1,c);
      dfs(r+1,c+1);
  }


    for (let i = 0; i < adjacency.length; i++) {
        for (let j = 0; j < adjacency[0].length; j++) {
          if (visited.has(`${i},${j}`)) {
            continue;
          } else if ( adjacency[i][j] === true) {
            connectedComponents++;
            dfs(i, j)
          }
        }
    }
    return connectedComponents;
  }