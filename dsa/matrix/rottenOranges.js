function orangesRotting(grid) {
  const FRESH = 1;
  const ROTTEN = 2;
  const EMPTY = 0;
  const freshOrangesSoFar = new Set();
  let queue = [];
  let levels = 0;

  const nodeName = (r, c) => `${r},${c}`;
  const inBounds = (r, c) => r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;

  // put fresh and rotten oranges in appropriate list
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++){
      if (grid[i][j] === FRESH) {
        freshOrangesSoFar.add(nodeName(i,j));
      } else if (grid[i][j] === ROTTEN) {
        queue.push([i, j]);
      }
    }
  }

  if (freshOrangesSoFar.size === 0) return 0;

  // BFS and store the levels
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [r,c] = queue.shift();

      if (inBounds(r - 1,c) && grid[r-1][c] === FRESH) {
        freshOrangesSoFar.delete(nodeName(r-1,c));
        queue.push([r-1, c]);
        grid[r-1][c] = ROTTEN;
      }
      if (inBounds(r,c + 1) && grid[r][c+1] === FRESH) {
        freshOrangesSoFar.delete(nodeName(r,c+1));
        queue.push([r, c+1]);
        grid[r][c+1] = ROTTEN;
      }
      if (inBounds(r + 1,c) && grid[r+1][c] === FRESH) {
        freshOrangesSoFar.delete(nodeName(r+1,c));
        queue.push([r+1, c]);
        grid[r+1][c] = ROTTEN;
      }
      if (inBounds(r,c - 1) && grid[r][c-1] === FRESH) {
        freshOrangesSoFar.delete(nodeName(r,c-1));
        queue.push([r, c-1]);
        grid[r][c-1] = ROTTEN;
      }
    }
    levels++;
  }

  return notVisited.size > 0 ? -1 : levels;
}