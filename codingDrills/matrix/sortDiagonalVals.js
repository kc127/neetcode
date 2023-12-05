/*

Imagine you're coordinating a voting station, and there are multiple lines of people waiting. However, not everyone is in the proper place in line (some have cut in front others, naturally).

You're given a grid/matrix representing people as integer values. The lower the number, the higher the priority in line (eg: 1 should be first in line).

The grid has diagonal (voting) **lines **of cells starting from some cell in either the top row or leftmost column - leading to the bottom right/grid's end.

Given an m x n grid grid of integers, sort each grid diagonal in ascending order and return the resulting grid. You may safely assume your grid is rectangular/valid.

For example:

[[3,3,1,1],
[2,2,1,2],
[1,1,1,2]]
would return

[[1,1,1,1],
[1,2,2,2],
[1,2,3,3]]

*/
function solution(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let diagToValues = {};

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          let diag = i - j;
          if (diagToValues[diag] === undefined) {
              diagToValues[diag] = [grid[i][j]];
          } else {
              diagToValues[diag].push(grid[i][j]);
          }
      }
  }

  // sort the values in diagToValues object
  for (let diag in diagToValues) {
      let sortedVals = diagToValues[diag].sort((a,b) => b-a);
      diagToValues[diag] = sortedVals;
  }

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          let diag = i - j;
          if (diagToValues[diag] !== undefined) {
              grid[i][j] = diagToValues[diag].pop();
          }
      }
  }
  return grid;
}
