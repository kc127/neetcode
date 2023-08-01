/*
'''
Conway's Game Of Life

Conway's Game of Life (see https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a famous example of a cellular automaton devised as a thought experiment for modeling local populations and other networks.

The game takes an initial state which is a matrix of booleans. True represents a live cell. False is dead. On every turn, each cell computes it's next state based on it's own state and that of it's neighbors along horizontals, verticals, or diagonals. The rules are:

- Any live cell with fewer than two live neighbors dies, as if by underpopulation.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

For ease of viewing the states, we'll use strings instead of booleans. An "X" will represent a live cell, a space will represent a dead cell.


EXAMPLE(S)
blinker = [
  [" ", " ", " ", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", " ", " ", " "],
]

blinker1 = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", " ", " ", " "],
]

blinker2 = [
  ["X"," "],
]

blinker3 = [
  ["X"," "],
  ["X"," "],
]

conway(blinker2, 1) => empty board
conway(blinker3, 1) => empty board


conway(blinker, 1) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', 'X', 'X', 'X', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]

conway(blinker1, 1) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]


conway(blinker, 2) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]

conway(blinker, 3) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', 'X', 'X', 'X', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]

blinker2 = [
  [' '],
  [' ']
]


Notice that this pattern cycles between horizontal and vertical orientations. Look in the the wikipedia article for more interesting and well known patterns!

[] 1. Explore
[] 2. Brainstorm
[] 3. Plan
[] 4. Implement
[] 5. Verify


Brainstorm:

Idea: Traverse the board for each cell and check for neighbors
speed: O(m * n * r) m rows, n columns, r number of rounds
space: O(m * n) or O(1)

Plan
countNeighbors method

Implement
countNeighbors helper function that counts all the existing neighbors

apply the 4 rules
3 that are for live cells
1 for dead cells
depending on the rule result we kill or spawn a new cell

LIVE
- Any live cell with fewer than two live neighbors dies, as if by underpopulation.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
DEAD
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
[
  [1,2,3],
  [1,2],
]
*/
function conway(board, rounds) {
  let nextBoard = board.slice();
  while (rounds > 0) {
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        let cell = board[r][c];
        let count = countNeighbors(board, r, c)
        console.log("cell", cell, "count", count, "row", r, "col", c);
        if (cell === "X") {
          if (count < 2 || count > 3) {
            cell = " ";
          }
        } else {
          if (count === 3) {
            cell = "X";
          }
        }
        nextBoard[r][c] = cell;
      }
    }
    rounds--;
    // console.log('result:', nextBoard);
    // board = nextBoard;
  }
  return nextBoard;
}

function countNeighbors(board, row, col) {
  let count = 0;
  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      // check for out of bounds
      if (r === row && c === col) {
        continue;
      }
      if (r >= 0 && r < board.length && c >= 0 && c < board[row].length) {
        if (board[r][c] === "X") {
          count++;
        }
      }
    }
  }
  return count;
}

const blinker = [
  [" ", " ", " ", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", " ", " ", " "],
]


// //console.log(countNeighbors([[ " ", "X" ]], 0, 0));
// console.log(countNeighbors(blinker, 2, 2));
// console.log(conway(blinker, 1))
// [
//   [ ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', 'X', 'X', 'X', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ' ]
// ]

const blinker1 = [
  [ ' ', 'X', 'X', 'X' ],
  [ ' ', ' ', 'X', 'X' ],
]
console.log(conway(blinker, 1))
// console.log(countNeighbors(blinker, 2,1))



/////// official solution
/*
Each step runs in O(n) time and uses O(n) space to compute the new state. If we iterate this over some number of rounds, the overall complexity is O(n * rounds).
*/

const LIVE = "X";
const DEAD = " ";

function countLiveNeighbors(board, r, c) {
  const neighbors = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1]
  ];

  let count = 0;
  for (const [dr, dc] of neighbors) {
    const nr = r + dr;
    const nc = c + dc;
    if (nr >= 0 && nr < board.length && nc >= 0 && nc < board[0].length) {
      count += board[nr][nc] === LIVE ? 1 : 0;
    }
  }

  return count;
}

function oneStep(board) {
  const newState = [];

  for (let r = 0; r < board.length; r++) {
    const newRow = [];
    newState.push(newRow);
    for (let c = 0; c < board[0].length; c++) {
      const liveCell = board[r][c] === LIVE;
      const neighbors = countLiveNeighbors(board, r, c);
      if (liveCell && (neighbors < 2 || neighbors > 3)) {
        newRow.push(DEAD);
      } else if (!liveCell && neighbors === 3) {
        newRow.push(LIVE);
      } else {
        newRow.push(liveCell ? LIVE : DEAD);
      }
    }
  }
  return newState;
}

function conway(board, rounds) {
  for (let i = 0; i < rounds; i++) {
    board = oneStep(board);
  }

  return board;
}