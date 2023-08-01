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

blinker = [
  [" ", " ", " ", " ", " "],
  [" ", " ", "", " ", " "],
  [" ", " X", "X", "X", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
]

conway(blinker, 1) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', 'X', 'X', 'X', ' ' ],
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

Notice that this pattern cycles between horizontal and vertical orientations. Look in the the wikipedia article for more interesting and well known patterns!


FUNCTION SIGNATURE
function conway(board, rounds) {
def conway(board, rounds):


'''

Engineering method

[] 1. Thoroughly understand the problem
[] 2. Identify some possible solution(s)
[] 3. Choose a solution
[] 4. Build it
[] 5. Test it

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

  //Adjust location of neighbors based on current row and column of X
  // Returns count
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
      const liveCell = board[r][c] === LIVE; // Set our LIVE position
      const neighbors = countLiveNeighbors(board, r, c); // Call neighbors and count neighbors
      // Adjust matrix based on neighbors count
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

let toad = [
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", "X", "X", "X", " "],
  [" ", "X", "X", "X", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
]




let beacon = [
  [" ", " ", " ", " ", " ", " "],
  [" ", "X", "X", " ", " ", " "],
  [" ", "X", "X", " ", " ", " "],
  [" ", " ", " ", "X", "X", " "],
  [" ", " ", " ", "X", "X", " "],
  [" ", " ", " ", " ", " ", " "],
]

console.log(conway(beacon,2));
