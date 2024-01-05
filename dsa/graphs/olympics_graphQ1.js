/*
INCOMPLETE and INCORRECT code
Given the adjacency matrix of the connected undirected graph with no loops or multiple edges, find the distance between the two specified vertices.

Example

For

matrix = [[false, false, true],
          [false, false, true],
          [true, true, false]]
vertex1 = 0, and vertex2 = 1, the output should be
solution(matrix, vertex1, vertex2) = 2.

Here's what the given graph looks like:



*/

/* complete + correct code */

/* question 2 */

function distanceBetweenVertices(matrix, vertex1, vertex2) {
    let adjList = {};

    for (let i = 0; i < matrix.length; i++) {
        adjList[i] = [];
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j]) {
                adjList[i].push(j);
            }
        }
    }

    let edges = 0;


      let visited = new Set();
      let queue = [[vertex1, 0]];
      let output = 0;
      while (queue.length) {

        let [node, level] = queue.shift();

        if (node === vertex2) {
          output = level;
          break;
        }


        for (let neighbor of adjList[node]) {
          if (!visited.has(neighbor)) {
            queue.push([neighbor, level + 1]);
          }
          visited.add(neighbor);
        }
      }
      console.log("I am set", visited)
      return output;
  }



  // test cases:
  let matrix =
  [[false,true,false,false,false,false,false,false],
   [true,false,true,false,false,false,false,false],
   [false,true,false,true,false,false,false,false],
   [false,false,true,false,true,false,false,false],
   [false,false,false,true,false,true,false,false],
   [false,false,false,false,true,false,true,false],
   [false,false,false,false,false,true,false,true],
   [false,false,false,false,false,false,true,false]]
  let vertex1 = 7
  let vertex2 = 0
  let expected = 7

  console.log(distanceBetweenVertices(matrix, vertex1, vertex2), expected)

  matrix =
  [[false,true,false,false],
   [true,false,true,false],
   [false,true,false,true],
   [false,false,true,false]]
  vertex1 = 0
  vertex2 = 1
  expected = 1;

  console.log(distanceBetweenVertices(matrix, vertex1, vertex2), expected)



  matrix =
  [[false,true,false,true,false],
   [true,false,true,false,true],
   [false,true,false,true,true],
   [true,false,true,false,false],
   [false,true,true,false,false]]
  vertex1= 0
  vertex2= 4
  expected = 2
  /*

  {
    '0': [ 1, 3 ],
    '1': [ 0, 2, 4 ],
    '2': [ 1, 3, 4 ],
    '3': [ 0, 2 ],
    '4': [ 1, 2 ]
  }

                  0 (v1)
                /   \
              1       3
            /   \   /
       (v2)4  __  2

  */

  console.log(distanceBetweenVertices(matrix, vertex1, vertex2), expected)


  matrix=
  [[false,true,false,false],
   [true,false,true,true],
   [false,true,false,true],
   [false,true,true,false]]
  vertex1= 2
  vertex2= 0
  expected = 2

  console.log(distanceBetweenVertices(matrix, vertex1, vertex2), expected)


  matrix=
  [[false,false,true],
   [false,false,true],
   [true,true,false]]
  vertex1= 1
  vertex2= 0
  expected = 2

  console.log(distanceBetweenVertices(matrix, vertex1, vertex2), expected)


  matrix=
  [[false,true,true],
   [true,false,false],
   [true,false,false]]
  vertex1= 0
  vertex2= 2
  expected = 1

  console.log(distanceBetweenVertices(matrix, vertex1, vertex2), expected)


  matrix=
  [[false,false,true],
   [false,false,true],
   [true,true,false]]
  vertex1= 0
  vertex2= 1
  expected = 2

  console.log(distanceBetweenVertices(matrix, vertex1, vertex2), expected)


/* incomplete + incorrect code */

function solution(matrix, vertex1, vertex2) {

    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    function createAdjList() {
         let adjList = {};
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === true) {
                    if (adjList[i] === undefined) {
                        adjList[i] = [j];
                    } else {
                        adjList[i].push(j);
                    }
                }
            }
        }
        return adjList;
    }

    let adjList = createAdjList();
    console.log(adjList);
    let queue = [[String(vertex1), 0]];
    let edgeDistance = 0;

    while (queue.length) {
        let [vertex, level] = queue.shift();

        if (vertex === String(vertex2)) {
            break;
        }
        edgeDistance++;

        if (adjList[vertex].length !== 0) {
            for (let neighbor of adjList[vertex]) {
                queue.push([String(neighbor), level + 1]);
            }
        }
    }
    return edgeDistance;
}

// test cases:
let matrix =
[[false,true,false,false,false,false,false,false],
 [true,false,true,false,false,false,false,false],
 [false,true,false,true,false,false,false,false],
 [false,false,true,false,true,false,false,false],
 [false,false,false,true,false,true,false,false],
 [false,false,false,false,true,false,true,false],
 [false,false,false,false,false,true,false,true],
 [false,false,false,false,false,false,true,false]]
let vertex1 = 7
let vertex2 = 0
let expected = 7

matrix =
[[false,true,false,false],
 [true,false,true,false],
 [false,true,false,true],
 [false,false,true,false]]
vertex1 = 0
vertex2 = 1
expected = 1;


matrix =
[[false,true,false,true,false],
 [true,false,true,false,true],
 [false,true,false,true,true],
 [true,false,true,false,false],
 [false,true,true,false,false]]
vertex1= 0
vertex2= 4
expected = 2

matrix=
[[false,true,false,false],
 [true,false,true,true],
 [false,true,false,true],
 [false,true,true,false]]
vertex1= 2
vertex2= 0

expected = 2

matrix=
[[false,false,true],
 [false,false,true],
 [true,true,false]]
vertex1= 1
vertex2= 0
expected = 2

matrix=
[[false,true,true],
 [true,false,false],
 [true,false,false]]
vertex1= 0
vertex2= 2
expected = 1

matrix=
[[false,false,true],
 [false,false,true],
 [true,true,false]]
vertex1= 0
vertex2= 1
expected = 2
