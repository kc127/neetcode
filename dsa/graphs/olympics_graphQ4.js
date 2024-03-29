/*

Suppose you are given an edge list of a DAG. This edge list contains int. tuples of the format.

(node1, node2)

Every node has a unique int associated with it. node1 is a parent node and node2 is a child node.

Return a list of the nodes N levels above any sink in ascending order.

Example
     1
    / \
   2  3    6
    \/ \    \
    4   5    7

solution(edge_list, 1) -> [2, 3, 6]
Explanation: The sinks are 4, 5, and 7. The nodes 1 level above are 2, 3, and 6

solution(edge_list, 2) -> [1]
Explanation: The sinks are 4, 5, and 7. Nodes 4 and 5 both have Node 1 two levels above.
Node 7 has zero nodes two levels above

solution(edge_list, 3) -> []
Explanation: There are no nodes 3 levels above the sinks

*/

/* COMPLETE + CORRECT SOLUTION YAYYY */

/*

Approach:
    created an inverted adjacency list (child to parent mapping)
    identify possible sinks
    bfs starting from sinks and it's level
      queue = [[sink, level]]
      visited set
      while queue is not empty
        if curr level is equal to targetLevel
            push to output
        get curr node's neighbors
        for each neighbor
          if neighbor not in visited
              add to queue with level + 1
          add neighbor to visited

      return output


*/
function solution(edge_list, n) {

  let invertedAdjList = {};

  for (let [parent, child] of edge_list) {
      if (invertedAdjList[child]) {
        invertedAdjList[child].push(parent);
      } else {
        invertedAdjList[child] = [parent];
      }
  }

  let possibleSinks = new Set(Object.keys(invertedAdjList));

  for (let child in invertedAdjList) {
    for (let parent of invertedAdjList[child]) {
      if (possibleSinks.has(parent.toString())) possibleSinks.delete(parent.toString());
    }
  }

  let output = [];
  let visited = new Set();
  let queue = [];
  for (let sink of possibleSinks) {
    queue.push([sink, 0]);
  }

  while (queue.length) {
    let [nodeId, level] = queue.shift();

    if (level === n) {
      output.push(nodeId);
    }
    let neighbors = invertedAdjList[nodeId] || [];

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, level + 1]);
      }
      visited.add(neighbor);
    }
  }
  return output;
}


/** Test Cases */

let edge_list =
[[1,2],
 [2,3]]
let n = 1

console.log(solution(edge_list, n)) //[2]

edge_list =
[[1,2],
 [2,3]]
n = 2
console.log(solution(edge_list, n)) // [1]

edge_list =
[[1,2],
 [1,3],
 [2,4],
 [3,4],
 [3,5],
 [6,7]]
 n = 1

console.log(solution(edge_list, n)) // [2, 3, 6]


/** INCOMPLETE + INCORRECT SOLUTION NOOOO */


function solution(edge_list, n) {
  let adjList = {};
  let allVertices = new Set();

  for (let [parent, child] of edge_list) {
      if (adjList[parent]) {
          adjList[parent].push(child);
      } else {
          adjList[parent] = [child];
      }
      allVertices.add(parent);
      allVertices.add(child);

  }

  let parents = Object.keys(adjList);

  let sinks = [];
  for (let vertex of allVertices) {
      if (keys.has(vertex)) {
          continue;
      }
      sinks.push(vertex);
  }

  console.log(allVertices)
  console.log(adjList)
  console.log(sinks);
}
