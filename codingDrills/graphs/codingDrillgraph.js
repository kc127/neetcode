/*

- nodes / vertices connected by edges
- cycle / acyclic
- directed
- connected / disconnected
-

    A
  /   \
 B     C
  \   /
    D


reprsenting graphs

- adjacency list
- adjacency matrix
- custom graph object


{
  A: [B, C],
  B: [D],
  C: [D],
  D: [],
}

[[0, 1, 1, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0]]


  [
    [A, B],
    [A,C],
    [B,D],
    [C, D]
  ]

*/

class GraphNode {
  constructor() {
    this.value = ...;
    this.neighbors = []; // list of GraphNode objects
  }
}


/*

we are given a 2d array of 0s and 1s

[
  [0, 1, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 1]
]
matrix traversal
(0,0)
(0,1)
(0,4)
[
  [x, x, x, x, 0, 0],
  [x, x, x, 0, 0, 1],
  [1, x, 0, 1, 0, 1]
]


iterate over all nodes:
  if node has been visited:
    skip
  if value is 0:
    skip
  if value is 1:
    traverse (dfs) and mark visited
=> 3

A - B - C - D - E - F
|   |   |   |   |   |
G - H - I - J - K - L
|   |   |   |   |   |
M - N - O - P - Q - R

1 represents land, 0 represents water

find the number of islands in this "map"

approach: matrix traversal + bfs/dfs + find neighbors

      global visited vs local visited set ?


*/