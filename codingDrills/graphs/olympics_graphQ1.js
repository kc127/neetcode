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

/*
    0 0 1
    0 0 1
    1 1 0

    adjList =
    {
        0: [2],
        1: [2],
        2: [0, 1]
    }

    edgeList = {
        [0, 2],
        [1, 2],
    }

    approach:

        use vertex1 as root
        count levels using bfs

*/
