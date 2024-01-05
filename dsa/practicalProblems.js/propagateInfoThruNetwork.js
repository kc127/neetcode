/*
'''
Propagate information through a network

A subset of database servers in a grid network received an update that needs to be replicated to the remaining nodes. Nodes can only broadcast updates to their immediate neighbors, north, west, south, and east, each second.

Given an initial state of the nodes with the updated information, determine how many seconds it will take to propagate the update to the entire network.

Assumptions:
1. If input array doesn't contain 1, return 0.
2. In-place (O(1) space) vs creating a copy (O(n*m))
    n = num of rows, m = num of cols


Approach: brute force approach (naive version)

  0. Create a totalTimeTaken to store num of seconds
  1. Traversing the matrix
    1.1 if current cell is 1
        a) find immediate neighbors => convert cell value to 1


1 0
0 0

after 1st iteration,

1 1
1 0

totalTimeTaken += 1 second


EXAMPLE(S)
If the state of the network at the 0th second is:
[
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
Then it takes 2 seconds to propagate the information. After the 1st second:
[
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0]
]
After the 2nd second:
[
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]



FUNCTION SIGNATURE
function broadcastTime(network) {
def broadcastTime(network: list[list[int]]) -> int:
'''

[x] 1. Thoroughly understand the problem
[] 2. Identify some possible solution(s)
[] 3. Choose a solution
[] 4. Build it
[] 5. Test it

*/

function broadcastTime(network) {
  let seconds = 0;
  let layer = [];
  for (let i = 0; i < network.length; i++) {
    for (let j = 0; j < network[i].length; j++) {
      if (network[i][j] === 1) {
        layer.push([i,j]);
      }
    }
  }

  // perform BFS to update all the nodes in the network and count the levels
  while (layer.length > 0) {
    let nextLayer = [];
    let updateOccured = false;
    for (let k = 0; k < layer.length; k++) {
      let neighbors = findNeighbors(layer[k][0],layer[k][1], network);

      for (let neighbor of neighbors) {
        let [r,c] = neighbor;
        if (network[r][c] === 0) {
          network[r][c] = 1;
          updateOccured = true;
          nextLayer.push([r,c]);
        }
      }
    }
    layer = nextLayer;
    seconds = updateOccured ? seconds + 1 : seconds + 0;
  }
  return seconds;
}

function findNeighbors(i, j, matrix) {
  let neighbors = [];
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let deltas = [[-1,0], [0,1], [1,0], [0,-1]];

  for (let [r,c] of deltas) {
    let rDx = i + r;
    let cDx = j + c;
    if (rDx >= 0 && rDx < rowLen && cDx >= 0 && cDx < colLen && matrix[rDx][cDx] === 0) {
      neighbors.push([rDx, cDx]);
    }
  }
  return neighbors;
}

/*
// official solution - in-place solution

function broadcastTime(network) {
  // find the nodes with the updated information
  let updatedNodeCell = []
  for (let r = 0; r < network.length; r++)
    for (let c = 0; c < network[0].length; c++)
      if (network[r][c] == 1)
        updatedNodeCell.push([r, c])

  let layer = updatedNodeCell
  console.log(layer)
  let elapsedTime = 0

  // perform BFS to update all the nodes in the network and count the levels
  while (layer.length > 0) {
    let nextLayer = []
    let updateHappened = false

    for (let k = 0; k < layer.length; k++) {
      let [r, c] = layer[k]
      let neighborCells = getNeighborCells(r, c, network)

      for (const [nr, nc] of neighborCells) {
        if (network[nr][nc] == 0) {
          network[nr][nc] = 1
          updateHappened = true
          nextLayer.push([nr, nc])
        }
      }
    }

    layer = nextLayer
    if (updateHappened)
      elapsedTime += 1
  }

  return elapsedTime
}

function getNeighborCells(i, j, network) {
  let neighborCells = []
  let rowLen = network.length
  let colLen = network[0].length
  // check for valid matrix indexes
  if (i > 0)
    neighborCells.push([i - 1, j])
  if (i < rowLen - 1)
    neighborCells.push([i + 1, j])
  if (j > 0)
    neighborCells.push([i, j - 1])
  if (j < colLen - 1)
    neighborCells.push([i, j + 1])

  return neighborCells
}
*/
/*
          (-1,0)
     (0,-1) i,j (0,1)
          (1,0)
*/

let network = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]



console.log(broadcastTime(network))

let network1 = [
  [1],
  [0],
  [0],
]
console.log(broadcastTime(network1) == 2)

let network2 = [
  [0,0,0],
  [0,1,0],
  [0,0,0],
]
console.log(broadcastTime(network2) == 2)

let network3 = [
  [0,0,0],
  [0,0,0],
  [0,1,0],
]
console.log(broadcastTime(network3) == 3)

let network4 = [
  [1,0,1],
  [0,0,0],
  [0,1,0],
]
console.log(broadcastTime(network4) == 1)

let network5 = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,1,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
]
console.log(broadcastTime(network5) == 4)

let network6 = [
  [0,0,0,0,0],
  [0,1,0,1,0],
  [0,0,0,0,0],
  [0,1,0,1,0],
  [0,0,0,0,0]
]
console.log(broadcastTime(network6) == 2)

let network7 = [
  [1,0,0,0,1],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,1]
]
console.log(broadcastTime(network7) == 4)

let network8 = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
  [1,0,0],
]
console.log(broadcastTime(network8) == 5)