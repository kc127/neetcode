/*

Q. Given a matrix, flip it vertically.

Examples:

Given:

[
    [1, 2],
    [3, 4]
]
returns:

[
    [2, 1],
    [4, 3]
]
Given:

[
    [1, 2]
]
returns:

[
    [2, 1]
]
Given:

[
    [1, 2],
    [3, 4],
    [5, 6]
]
returns:

[
    [2, 1],
    [4, 3],
    [6, 5]
]

*/
function solution(matrix) {
  let ans = [];

  for (let r = 0; r < matrix.length; r++) {
      let row = [];
      for (let c = matrix[0].length - 1; c >= 0; c--) {
          row.push(matrix[r][c]);
      }
      ans.push(row);
  }
  return ans;
}
