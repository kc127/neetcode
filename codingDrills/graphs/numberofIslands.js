var numIslands = function(grid) {
  let islands = 0;

  function dfs(r, c) {
      let rows = grid.length;
      let cols = grid[0].length;

      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
          return;
      }
      grid[r][c] = "0";
      dfs(r-1, c);
      dfs(r, c + 1);
      dfs(r+1, c);
      dfs(r, c - 1);
  }

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === "1") {
              dfs(i, j);
              islands++;
          }
      }
  }
  return islands;
};