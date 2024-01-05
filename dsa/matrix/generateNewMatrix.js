/*

Given a matrix, row r, and column c, generate a new matrix of a new size rxc, filling it with the original elements in the same row-traversing order. If the new matrix does not have the same total capacity, then return the original matrix.

*/
function solution(m, r, c) {
  if (m.length * m[0].length !== r * c) {
      return m;
  }
  let ans = [];
  let res = [];

  for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[0].length; j++) {
          res.push(m[i][j]);
      }
  }

  for (let i = 0; i < r; i++) {
      let row = []
      for (let j = 0; j < c; j++) {
          row.push(res.shift());
      }
      ans.push(row);
  }
  return ans;
}
