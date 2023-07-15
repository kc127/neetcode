/*
'''
Reversi Move Validator

Reversi (https://en.wikipedia.org/wiki/Reversi), also called Othello, is a game where each disc has two sides, black and white, and after being placed, further moves cause other discs to flip colors. Specifically, a line of discs of one color gets flipped when surrounded on both ends by discs of the opposite color.

In this problem, you're given a 2-dimensional array representing the board. Each position will contain a value of “B” for black, “W” for white, or “*” to represent an empty spot. Additionally, we get a position that is currently empty. If it's black's turn to play, our task is to determine if this is a legal move.

A move must meet all of the following criteria:
1. It must have at least one adjacent piece of the opposite color. (Diagonals count)
2. The play must surround a series of pieces of the opposite color in a line, thereby flipping them.

A simple, 1-dimensional example consider:

* W W W B * * *

In this case, only the first position is a valid move for black to play because it would surround three white tiles. The remaining positions are invalid moves because they would not surround any white tiles.

This is the starting state of the game with black's possible opening moves labeled with an L:

  0 1 2 3 4 5 6 7
0 * * * * * * * *
1 * * * * * * * *
2 * * * * L * * *
3 * * * B W L * *
4 * * L W B * * *
5 * * * L * * * *
6 * * * * * * * *
7 * * * * * * * *

The board will always be no more than an 8x8 matrix of these three symbols.

Assumption:
- assume we are playing with "black disc"

Input:
  - current state of board as array of arrays
  - [r, c] =>

Output:


Approach:

  - if given r and c are within bounds of the matrix and matrix[r][c] === "*"
      - intial deltas array
      - loop over the deltas, at each cell
           check if dx,dy is inbound and if current position has atleast one "W"
             if YES: continue


  Requirements for a valid
  - r. c
// [2, 3] => [[1, 0], [-1, 0], [0, -1], [0, 1],[1,1],[-1,-1],[-1,1],[1,-1]]



for loop..
   r + 1, c + 0
   if this is in bounds (3, 3)


EXAMPLE(S)
isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', 'B', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3)
Output:  true

isLegalMove(
  [
    ['*', 'B', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3)
Output:  true

isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', 'W', '*', '*', '*'],
  ],
  2, 3)
Output:  false


FUNCTION SIGNATURE
function isLegalMove(board, r, c)
'''
*/

function isLegalMove(board, r, c) {
  if (board[r][c] !== "*") return false;

  const deltas = [[1, 0], [-1, 0], [0, -1], [0, 1], [1, 1] ,[-1, -1],[-1, 1],[1, -1]];

  for (const [rowDelta, colDelta] of deltas) {
    let row = r + rowDelta;
    let col = c + colDelta;
    if (isInBounds(row, col, board)) {
      if (board[row][col] === "W") {
        let dx = row + rowDelta;
        let dy = col + colDelta;
        if (board[dx][dy] === "B") {
          return true;
        }
      }
    }
  }
  return false;
}

function isInBounds(r, c, board) {
  if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) {
    return false;
  }
  return true;
}


console.log(isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', 'B', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3))
// Output:  true

console.log(isLegalMove(
  [
    ['*', 'B', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3))
// Output:  true

console.log(isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', 'W', '*', '*', '*'],
  ],
  2, 3))
// Output: false

console.log(isLegalMove(
  [
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', 'B', 'W', '*', '*', '*'],
    ['*', '*', '*', 'W', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
  ],
  2, 3),
  false
);

console.log(isLegalMove(
  [
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', 'B', 'W', '*', '*', '*'],
    ['*', '*', '*', 'W', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
  ],
  2, 4),
  true
);

console.log(isLegalMove(
  [
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', 'B', 'W', '*', '*', '*'],
    ['*', '*', '*', 'W', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
  ],
  3, 5),
  true
);

console.log(isLegalMove(
  [
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', 'B', 'W', '*', '*', '*'],
    ['*', '*', '*', 'W', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
  ],
  4, 5),
  false
);

console.log(isLegalMove(
  [
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', 'B', 'W', '*', '*', '*'],
    ['*', '*', '*', 'W', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
  ],
  5, 5),
  false
);

console.log(isLegalMove(
  [
    ['B', 'W', 'W', 'W', 'W', 'W', 'W', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', 'B', 'W', '*', '*', '*'],
    ['*', '*', '*', 'W', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
  ],
  0, 7),
  true
);

console.log(isLegalMove(
  [
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', 'B', 'W', '*', '*', '*'],
    ['*', '*', '*', 'W', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*'],
  ],
  2, 2),
  false
);