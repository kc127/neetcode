/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  let visited = new Set();
  let [ROWS, COLS] = [grid.length, grid[0].length];

  function dfs(r, c) {
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === 0) {
          return 0;
      }
      if (visited.has(`${r},${c}`)) {
          return 0;
      }
      visited.add(`${r},${c}`);

      return 1 + dfs(r-1, c) + dfs(r, c+1) + dfs(r+1, c) + dfs(r, c-1);
  }

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {

              maxArea = Math.max(maxArea, dfs(i, j));

      }
  }
  return maxArea;
};