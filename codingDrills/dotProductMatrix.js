/*
'''
❓ PROMPT
In mathematics when two matrices are multiplied, the result is a new matrix where each position (i, j) in the output is the sum of the products of the ith _row_ in the first matrix and the jth _column_ in the second. This is called the [dot product](https://www.mathsisfun.com/algebra/matrix-multiplying.html).

As a follow-up, modify your code to support matrices that are *not* square. This requires that the number of columns in the first matrix be equal to the number of rows in the second so that the row x column cross products are possible.

Example(s)
a = [
  [1, 2],
  [3, 4]
]
b = [
  [5, 6],
  [7, 8]
]
matrixMultiply(a,b) ==
[
  [19,22],
  [43,50]
]
The (0, 0) position in the result is: 1 * 5 + 2 * 7 = 19
The (0, 1) position in the result is: 1 * 6 + 2 * 8 = 22
The (1, 0) position in the result is: 3 * 5 + 4 * 7 = 43
The (1, 1) position in the result is: 3 * 6 + 4 * 8 = 50

'''
*/
/*
function matrixMultiply(a, b) {
  let rowLen = a.length;
  let colLen = a[0].length;

  let result = Array.from(Array(rowLen), () => new Array(colLen).fill(0));

  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      let val = 0;
      for (let k = 0; k < rowLen; k++) {
        val += a[r][k] * b[k][c];
      }
      result[r][c] = val;
    }
  }
  console.log(result);
  return result;
} */

// let a = [
//   [1, 2],
//   [3, 4]
// ]

// let b = [
//   [5, 6],
//   [7, 8]
// ]
// matrixMultiply(a,b) ==
// [
//   [19,22],
//   [43,50]
// ]

// let a = [[]]
// let b = [[]]
// console.log(JSON.stringify(matrixMultiply(a,b))
//   === JSON.stringify([[]]) || JSON.stringify(matrixMultiply(a,b))
//   === JSON.stringify([[null]]))

// a = [[5]]
// b = [[10]]
// console.log(JSON.stringify(matrixMultiply(a,b))
//   === JSON.stringify([[50]]))

// a = [
//   [1, 2],
//   [3, 4]]
// b = [
//   [5, 6],
//   [7, 8]]
// console.log(JSON.stringify(matrixMultiply(a,b)) === JSON.stringify([
//   [19,22],
//   [43,50]]))

// a = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]]
// b = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90]]
// console.log(JSON.stringify(matrixMultiply(a,b)) === JSON.stringify([
//   [300,360,420],
//   [660,810,960],
//   [1020,1260,1500]]))



function matrixMultiply(a, b) {
  const aCol = a.length
  const aRow = a[0].length
  const bRow = b[0].length
  console.log(a, aCol);
  console.log(a, aRow);
  console.log(b, bRow);

  const result = Array.from(Array(aCol), () => new Array(bRow).fill(0))

  for (let i = 0; i < aCol; i++) {
      for (let j = 0; j < bRow; j++) {
          let value = 0;
          for (let k = 0; k < aRow; k++) {
              value += a[i][k] * b[k][j];
          }
          result[i][j] = value;
      }
  }
  console.log(result)
  return result;
}

let a = [[1, 2, 3]]
let b = [
  [4],
  [5],
  [6]]
console.log(JSON.stringify(matrixMultiply(a,b))
  === JSON.stringify([[32]]))

a = [
  [1, 2, 3],
  [4, 5, 6]]
b = [
  [10, 20],
  [30, 40],
  [50, 60]]
console.log(JSON.stringify(matrixMultiply(a,b)) === JSON.stringify([
  [220,280],
  [490,640]]))