/*

Q. Given a matrix, row r, and column c, generate a new matrix of a new size rxc, filling it with the original elements in the same row-traversing order. If the new matrix does not have the same total capacity, then return the original matrix.

*/

function solution(m, r, c) {
  if (m.length !== r || m[0].length !== c) {
      return m;
  }
  let newMat = [];
  for (let i = 0; i < m.length; i++) {
      let newRow = 0;
      for (let j = 0; j < m[0].length; j++) {
          newRow.push(m[i][j]);
      }
      newMat.push(newRow);
  }
  return newMat;
}
