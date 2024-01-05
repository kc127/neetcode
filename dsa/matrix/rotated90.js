/*
Given a matrix of integers m, rotate it by 90 degrees counterclockwise.

Example

For

m = [[1, 2, 3, 4],
     [5, 6, 7, 8]]
the output should be

rotateMatrix180(m) = [[4, 8],
                      [3, 7],
                      [2, 6],
                      [1, 5]]

*/

function solution(m) {
  if (m.length === 0) return [];
  if (m[0].length === 0) return [[]];

  let ans = [];

  for (let c = m[0].length - 1; c >= 0; c--) {
      let row = [];
      for (let r = 0; r < m.length; r++) {
          row.push(m[r][c]);
      }
      ans.push(row);
  }
  return ans;
}
