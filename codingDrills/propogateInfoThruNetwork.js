/*
'''
Propagate information through a network

A subset of database servers in a grid network received an update that needs to be replicated to the remaining nodes. Nodes can only broadcast updates to their immediate neighbors, north, west, south, and east, each second.

Given an initial state of the nodes with the updated information, determine how many seconds it will take to propagate the update to the entire network.


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

Target runtime and space complexity

Update in snapshots of each second approach
Time: O(N*T)
Space: O(N)
Precise in-place updates approach
Time: O(N)
Space: O(N)
Where T is the number of seconds to update the entire network, and N is the total number of nodes in the network.

Q: Will the board always be square?
A: No.
Q: Will the board always contain at least one row and column?
A: Yes. The initial state will always be a valid state.
Q: Will there always be at least 1 node with an update?
A: Yes.
Q: Can the entire network start off completely updated?
A: Yes, so it would take 0 seconds.


Update in snapshots of each second approach
Create a time counter to track the number of ticks to make copies of the matrix for each tick and iterate through the entire original matrix each pass to update a new matrix.
make a copy of the matrix representing the state in the upcoming second
start a tick counter at 0
while there was at least one update made
  go through each cell of the current snapshot
    if the cell has updated information
      update the state of its north, west, south, and east neighbors in the next snapshot
    if at least 1 cell in the upcoming snapshot was updated
      increase the number of seconds that have elapsed
      make the next snapshot become the current snapshot and repeat the process
Precise in-place updates approach
Track the cells with the updated information and perform BFS to update their neighbors on each tick. Each tick will only store the updated neighbors to avoid needing to scan the entire matrix.
find the nodes with the updated information
create a queue to perform a breadth-first search
create a counter to keep track of the levels, which is the seconds elapsed
perform BFS to update all the nodes in the network and count the levels


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

Update Snapshots of each second

function broadcastTime(network) {
  function deepCopy(oldState) {
    let newState = []
    for (let r = 0; r < oldState.length; r++) {
      let newRow = []
      for (let c = 0; c < oldState[0].length; c++) {
        newRow.push(oldState[r][c])
      }
      newState.push(newRow)
    }
    return newState
  }

  let currentState = network
  let nextState = deepCopy(currentState)

  let seconds = 0
  let rows = network.length
  let cols = network[0].length
  while (true) {
    let updateHappened = false
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Only update outdated neighbors
        if (currentState[row][col] == 1) {
          if (row > 0 && currentState[row-1][col] == 0) {
            nextState[row-1][col] = 1
            updateHappened = true
          }
          if (row < rows-1 && currentState[row+1][col] == 0) {
            nextState[row+1][col] = 1
            updateHappened = true
          }
          if (col > 0 && currentState[row][col-1] == 0) {
            nextState[row][col-1] = 1
            updateHappened = true
          }
          if (col < cols-1 && currentState[row][col+1] == 0) {
            nextState[row][col+1] = 1
            updateHappened = true
          }
        }
      }
    }
    if (!updateHappened)
      break

    // the updated snapshot is now the current snapshot
    currentState = nextState
    nextState = deepCopy(currentState)

    seconds += 1
  }

  return seconds
}

Precise in-place updates

function broadcastTime(network) {
  // find the nodes with the updated information
  let updatedNodeCell = []
  for (let r = 0; r < network.length; r++)
    for (let c = 0; c < network[0].length; c++)
      if (network[r][c] == 1)
        updatedNodeCell.push([r, c])

  let layer = updatedNodeCell
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



/*
'''
Propagate information through a network

A subset of database servers in a grid network received an update that needs to be replicated to the remaining nodes. Nodes can only broadcast updates to their immediate neighbors, north, west, south, and east, each second.

Given an initial state of the nodes with the updated information, determine how many seconds it will take to propagate the update to the entire network.


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

Approach:
- traverse the matrix in row-major fashion
  - if curr cell is 1 => get all neighbors and make it 1
  -


FUNCTION SIGNATURE
function broadcastTime(network) {

}
*/

function broadcastTime(network) {
  // find cell with updated information
  let ones = []
  for (let r = 0; r < network.length; r++) {
    for (let c = 0; c < network[0].length; c++) {
      if (network[r][c] === 1) {
        ones.push([r,c]);
      }
    }
  }

  let elapsedTime = 0;

  while (ones.length > 0) {
    let nextLayer = [];
    let alreadyUpdated = false;
    for (let k = 0; k < ones.length; k++) {
      let [r,c] = ones[k];
      let neighbors = getNeighbors(r, c, network);

      for (let [nr,nc] of neighbors) {
        if (network[nr,nc] === 0) {
          alreadyUpdated = true;
          nextLayer.push([nr, nc]);
        }
      }
      layer = nextLayer;
      elapsedTime = alreadyUpdated ? elapsedTime + 1 : elapsedTime
    }
  }

  return elapsedTime;
}


function getNeighbors(r, c, matrix) {
  let neighbors = [];
  let delta_row = [-1, 0, 1, 0];
  let delta_col = [0, 1, 0, -1];

  for (let i = 0; i < delta_row.length; i++) {
    let neighborRow = r + delta_row[i];
    let neighborCol = c + delta_col[j];
    if (0 <= neighborRow )
  }


  return neighbors;
}


*/