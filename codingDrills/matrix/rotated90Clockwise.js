/*

Given a matrix of integers m, rotate it by 90 degrees clockwise.

Example

For

m = [[1, 2, 3, 4],
     [5, 6, 7, 8]]
the output should be

rotateMatrix180(m) = [[5, 1],
                      [6, 2],
                      [7, 3],
                      [8, 4]]

*/

function solution(m) {
  if (m.length === 0) return [];
  if (m[0].length === 0) return [[]]
  let ans = [];

  for (let c = 0; c < m[0].length; c++) {
      let row = [];
      for (let r = m.length - 1; r >= 0; r--) {
          row.push(m[r][c]);
      }
      ans.push(row);
  }

  return ans;
}
