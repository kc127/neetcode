/* 1. DFS Solution */

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

/* BFS Solution */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === "1") {
              bfs(grid, i, j);
              islands++;
          }
      }
  }
  return islands;
};

var bfs = function(grid, i, j) {
  let [ROWS, COLS] = [grid.length, grid[0].length];

  let directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
  ];

  let queue = [[i,j]];
  grid[i][j] = "0";
  while (queue.length > 0) {
      let [cr, cc] = queue.shift();

      for (let [dr,dc] of directions) {
          let [nr, nc] = [cr + dr, cc + dc];
          if (!(nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || grid[nr][nc] === "0")) {
              queue.push([nr,nc]);
              grid[nr][nc] = "0";
          }
      }
  }
}

