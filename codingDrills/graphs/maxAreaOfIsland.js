/**
 * @param {number[][]} grid
 * @return {number}
 *
 * WHY ITERATIVE is BETTER than RECURSIVE?
 *
 * - " In the real world, you should prefer iterative algorithms over recursive ones because the maximum number of recursive calls is limited by the size of the call stack, while an iterative algorithm uses its own stack or queue, which you control the size of. In other words, iterative solutions are usually way more scalable than recursive ones. This is true for Java and many other languages. There are exceptions, and there are ways around the call stack limitation (like tail-call optimization) but it's a good idea to check the size of your call stack before you consider recursive code."
 *
 * */


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

