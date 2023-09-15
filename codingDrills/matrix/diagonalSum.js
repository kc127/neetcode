/*
'''
❓ PROMPT
Given a square matrix *mat*, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal *that are not part of the primary diagonal*.

Example(s)
Input:
[[1,2,3],
 [4,5,6],
 [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Element mat[1][1] = 5 is counted only once.

Input:
[[1,1,1,1],
 [1,1,1,1],
 [1,1,1,1],
 [1,1,1,1]]
Output: 8

Input: [[5]]
Output: 5


*/

function diagonalSum(matrix) {
  if (matrix.length === 0) return 0;
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let diagonalSum = 0;
  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (r === c || r + c === rowLen - 1) {
        diagonalSum += matrix[r][c];
      }
    }
  }
  return diagonalSum;
}

let mat =
[[1,2,3],
 [4,5,6],
 [7,8,9]]
console.log(diagonalSum(mat) === 25)

mat =
[[1,1,1,1],
 [1,1,1,1],
 [1,1,1,1],
 [1,1,1,1]]
 console.log(diagonalSum(mat) === 8)

 mat = [[5]]
 console.log(diagonalSum(mat) === 5)

 mat = []
 console.log(diagonalSum(mat) === 0)
