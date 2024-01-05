/*
You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

Assumptions:
 1. matrix is rectangle
 2. given two properties are always true
 3. yes duplicates

Input: matrix = [
            [1, 3, 5, 7],
            [10,11,16,20],
            [23,30,34,60]], target = 3
Output: true
6
 0 1 2 3 4  5   6  7  8  9 10 11
[1,3,5,7,10,11,16,20,23,30,34,60]

idx = 9
n = 4
row = math.floor(idx/col) => 9/4 => 2
col = idx%col = 9%4 => 1

left = 0;
right = m * n - 1;

colIndexMid = idx % col
rowIndexMis = math.floor(idx/col)

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Input: matrix = [[0, 1]], target = 3, return true

Input: matrix = [[-2, -2, 0],     target = -2, return true
                 [1,  2,  3]]

Approaches:

    Idea 1: Traverse the matrix
          O(n*m) time and O(1) space

    Idea 2: O(logn) solution => Binary Search Algorithm


      new idea:


          while row and col are within range
              midRow  = bottomRow/2
              midCol  = totalCols/2
              if midValue is target, return true
              if midValue < target


    classic binary search of a list
          left vs right
            check if mid value === target
                  if mid value < target
                      left = mid + 1
                  if mid value > target
                      right = mid - 1


    target = 3
        [1, 3, 5, 7],
        [10,11,16,20],
        [23,30,34,60]
        ....
        ....

    Pseudocode:
        row = 0 <= bottomRow (2), col = 0 <= rightMostCol (3)

         leftPtr  = matrix[0][0] = 1
         rightPtr = matrix[2][3]  = 60

         midRow = (bottomRow - row)/2 = 1
                  (1 - 0)/ 2 = 0
         midCol = (rightMostCol - col)/2  = 1
                  (2 - 0)/2 = 1
         midPtr  = matrix[1][1] = 11
                  matrix[0][1] = 3

         midVal > target  e.g. 11 > 3
            decrement bottomRow = midRow  (bottom to top movement)
                                = 1
            decrement rightMostCol  = midCol (right to left movement)
                              = 2

        midVal < target e.g 16 < 60
            increment row = midRow
            increment col = midCol


*/

function searchInSortedMatrix(matrix, target) {
  let row = 0;
  let bottomRow = matrix.length - 1;

  let col = 0;
  let rightCol = matrix[0].length - 1;

  while (row <= bottomRow && col <= rightCol) {
    let midRow = Math.floor((row + bottomRow)/2); // 0 + 0 = 0
    let midCol = Math.floor((col + rightCol)/2); // 0 + 1 = 1

    let midValue = matrix[midRow][midCol]; // 3

    if (midValue === target) {
      return true;
    } else if (midValue > target) {
      bottomRow = midRow; // 2 - 1 = 1


    } else if (midValue < target) {
      col = midCol;
    }
  }

  return false;
}

///////////

let directions = [[-1, 0], [0, 1], [1, 0], [-1, 0]];
let libertyCounter = 0;
let visitedSet = new Set();
function countLiberties_Kanchan(board, x, y) {
  // - Initialize libertyCounter to 0

  // - Initialize a visited set
  let stoneColor = board[x][y];
  let oppositeColor = "";

  if (stoneColor === "W") {
    oppositeColor = "B"
  } else {
    oppositeColor = "W";
  }


  visitedSet.add(`${x}${y}`)
  for (let [row, col] of directions) {

    let deltaRow = x + row;
    let deltaCol = y + col;
    if (visitedSet.has(`${deltaRow}${deltaCol}`)) {
      continue;
    } else if (0 <= deltaRow && deltaRow < board.length && 0 <= deltaCol && deltaCol < board[0].length){

      visitedSet.add(`${deltaRow}${deltaCol}`);
      if (board[deltaRow][deltaCol] === stoneColor) {
          countLiberties_Kanchan(board, deltaRow, deltaCol)
      } else if (board[deltaRow][deltaCol] === oppositeColor) {
          // - Opposite color:
        // - Stop moving in that direction
        continue;
      } else if (board[deltaRow][deltaCol] === "+") {
        // - Empty space:
        // - Increment our libertyCounter
        // - Stop
        libertyCounter++;
        continue;
      }
    }

  }
  return libertyCounter;
}

for(const CountLiberties of [countLiberties_Kanchan]) {

  const board = [
    ['+', '+', '+'],
    ['+', 'B', 'B'],
    ['+', '+', 'B'],
  ]

  console.log(CountLiberties(board, 1, 1), 4)

  console.log('--------------')
}