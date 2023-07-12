/*
'''
❓ PROMPT
In this task, we're going to apply basic 2-dimensional matrix traversals to solve some simple problems. While working on these, look out for other patterns you may have seen previously. Each of these takes the row- and column-major traversals and composites them with simpler ideas you have almost certainly encountered in one-dimensional problems.

This task is two similar problems in one:
- First, write a function that returns the average of the smallest values in each _column_.
- Write a new version of this function that returns the average of the smallest value in each _row_.

Remember that since we represent a matrix as nested arrays (an array of arrays), many problems on a matrix can be broken down into two array patterns. This makes them easier to reason about and code.

Example(s)
matrix = [
  [32, 23, 3],
  [23,  7, 5]
]


averageColumnMinimum(matrix) == 11 (because average(23, 7, 3) = 11)
averageRowMinimum(matrix) == 4 (because average(5, 3) = 4)

*/

function averageColumnMinimum(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;

  let minColumnSum = 0;

  for (let c = 0; c < matrix[0].length; c++) {
    let minColVal = Infinity;
    for (let r = 0; r < matrix.length; r++) {
        minColVal = Math.min(minColVal, matrix[r][c])
    }
    minColumnSum += minColVal;
  }
  let avg = minColumnSum/matrix[0].length;
  return avg;
}

function averageRowMinimum(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;

  let rowMinSum = 0;

  for (let r = 0; r < matrix.length; r++) {
    let rowMinVal = Infinity;
    for (let c = 0; c < matrix[0].length; c++) {
      rowMinVal = Math.min(rowMinVal, matrix[r][c]);
    }
    rowMinSum += rowMinVal;
  }
  return Math.floor(rowMinSum/matrix.length);
}

// let matrix = [
//   [32, 23, 3],
//   [23,  7, 5]
// ]

// console.log(averageColumnMinimum(matrix) == 11);
// console.log(averageRowMinimum(matrix) == 4);

let matrix = [[]];
console.log(averageColumnMinimum(matrix) === 0)
console.log(averageRowMinimum(matrix) === 0)

matrix = [[5]];
console.log(averageColumnMinimum(matrix) === 5)
console.log(averageRowMinimum(matrix) === 5)

matrix = [[1, 2, 3]];
console.log(averageColumnMinimum(matrix) === 2)
console.log(averageRowMinimum(matrix) === 1)

matrix = [
  [1],
  [4],
  [7]];
console.log(averageColumnMinimum(matrix) === 1)
console.log(averageRowMinimum(matrix) === 4)

matrix = [
  [5, 5, 5],
  [5, 5, 5]];
console.log(averageColumnMinimum(matrix) === 5)
console.log(averageRowMinimum(matrix) === 5)

matrix = [
  [32, 23, 3],
  [23,  7, 5]];
console.log(averageColumnMinimum(matrix) === 11) // average(23, 7, 3) = 11
console.log(averageRowMinimum(matrix) === 4) // average(5, 3) = 4

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];
console.log(averageColumnMinimum(matrix) === 2)
console.log(averageRowMinimum(matrix) === 4)

matrix = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15]];
console.log(averageColumnMinimum(matrix) === 3)
console.log(averageRowMinimum(matrix) === 6)