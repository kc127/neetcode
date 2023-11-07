/*
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

*/
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

    function dfsHelper(node, path, visited) {
      if (path.has(node)) {
        return true;
      }
      if (visited.has(node)) {
        return true;
      }
      path.add(node);

      for (let neighbor of adjList[node]) {
        if (dfsHelper(neighbor, path, visited)) {
          return true;
        }
        visited.add(neighbor);
      }
      return false;
    }

    for (let node in adjList) {
      if (dfsHelper(node, new Set(), new Set())) {
        return true;
      }
    }
    return false;
  }




  // test cases

  let adjacency = [[false,true,false,false,false],
                   [false,false,false,true,false],
                   [false,false,false,false,false],
                   [false,false,false,false,false],
                   [false,true,false,false,false]]

  console.log(solution(adjacency), " expect false"); // false

  /*
        0-1-3
          |
          4

  */

  adjacency = [[false]]
  console.log(solution(adjacency), " expect false"); // false

  adjacency = [[true]]
  console.log(solution(adjacency), " expect true");

  adjacency =
  [[false,true],
   [false,false]]

  console.log(solution(adjacency), " expect false");

   adjacency =
  [[false,true],
   [true,false]]

  console.log(solution(adjacency), " expect true");

   adjacency =
  [[false,false,false,true,true],
   [true,false,true,true,false],
   [false,true,true,false,true],
   [false,true,true,true,false],
   [false,true,false,false,true]]

  /*
      1-2
      |\
      0-3
      |
      4

  */

  console.log(solution(adjacency));

   adjacency =
  [[false,true,false,false,false],
   [false,false,false,true,false],
   [false,false,false,false,false],
   [false,false,false,false,false],
   [false,true,false,false,false]]

   console.log(solution(adjacency));

   adjacency =
  [[false,false,false,false,true],
   [true,false,true,false,false],
   [false,false,false,true,false],
   [false,false,false,true,false],
   [false,true,false,false,false]]
   console.log(solution(adjacency));

   adjacency =
  [[false,false,false,true,false],
   [false,false,true,false,false],
   [true,false,false,true,false],
   [true,true,false,false,false],
   [true,true,false,true,false]]
   console.log(solution(adjacency));

   adjacency =
  [[false,true,false,false],
   [false,false,false,false],
   [false,false,false,true],
   [false,false,true,false]]
   console.log(solution(adjacency));