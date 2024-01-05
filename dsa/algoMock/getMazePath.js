from collections import deque

def get_neighbors(maze, i, j):
    neighbors = set()
    if i > 0 and maze[i-1][j] != 1:
        neighbors.add((i -1, j))
    if i < len(maze) - 1 and maze[i+1][j] != 1:
        neighbors.add((i + 1, j))
    if j > 0 and maze[i][j-1] != 1:
        neighbors.add((i, j - 1))
    if j < len(maze[0]) - 1 and maze[i][j+1] != 1:
        neighbors.add((i, j + 1))
    return neighbors

def getMazePath(maze):
    if len(maze) == 0:
        return []
    if len(maze[0]) == 0:
        return []

    q = deque()
    visited = set()
    # Seed with the current node and path
    start_node = (0, 0)
    start_path = [(0, 0)]
    q.append((start_node, start_path))
    visited.add((0, 0))

    target = (len(maze) - 1, len(maze[0]) - 1)
    while q:
        curr_node, path = q.popleft()
        if curr_node == target:
            return path
        neighbors = get_neighbors(maze, curr_node[0], curr_node[1])
        for neighbor in neighbors:
            if neighbor not in visited:
                visited.add(neighbor)
                newpath = list(path)
                newpath.append(neighbor)
                q.append((neighbor, newpath))
    return None


    /*
'''
You're given a 2d array with 1's and 0's. 1's represent walls, and 0's represent open, walkable space. A robot starts on the top left and goes down to the bottom right. This robot can move in any the cardinal (NSEW) direction, not diagonals.

Output the shortest path a robot should take from the top left to the bottom right. If there are multiple shortest paths, any path is valid. If there is no valid path, return None/null.

Assumptions:
1. m * n matrix
2. path starts at top left and end at bottom right
3. distance is the number of cells travelled to get from top left to bottom right


EXAMPLE(S)
Example 1:
Maze:
0 0 0 0
1 1 0 0
0 0 0 1
0 1 1 0
0 0 0 0

getMazePath(maze) -> [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (3, 0), (4, 0), (4, 1), (4, 2), (4, 3)]

Explanation: The robot needs to travel around the two rows of walls. We're representing the path returned by annotating it with Xs.
x x x 0
1 1 x 0
x x x 1
x 1 1 0
x x x x


Example 2:

1 1
1 1
return null

Example 3:

1 0
0 1
return null

Example 4:

0
return [[0,0]]

Example 5:
1
return null

Example 6
null
return null

Example 7
0 0
0 0

X X
0 X

X 0
X X

[[0,0],[1,0], [1,1]]

Approaches:
 BFS : TIME: O(rows * cols)
       SPACE: set => O(rows * cols) , queue => O(rows * cols) overall =>  O(rows * cols)

    directions
    visted set
    shortest distance
    Traverse the matrix
     1. is the first cell is walkable (0)
         shortest distance = Math.min (shortest distance, BFS on the neigbors)

    BFS helper function (matrix, row, col, curr dist = 0)
      as long as row and col and within range
      as long as row and col values are walkable
      as long as row and col haven't been visited before

          iterate over the directions (NSEW)
              if walkable
                  add to curr distance

      return curr distance

FUNCTION SIGNATURE
def getMazePath(maze):
'''
*/
const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];

function getMazePath(maze) {
  if (!maze || maze.length === 0 || maze[0].length === 0) {
    return null;
  }

  let shortestDistance = Infinity;
  let sourceToDestPath = [];

  function getNeighbors(r, c) {
    let neighbors = [];
    let [ROWS, COLS] = [maze.length, maze[0].length];

    for (let [x, y] of DIRECTIONS) {
      let dx = r + x;
      let dy = c + y;
      if (dx >= 0 && dx < ROWS && dy >= 0 && dy < COLS) {
        neighbors.push([dx, dy]);
      }
    }
    return neighbors;
  }


  function bfsIterative(row, col, currDist = 0, path = []) {
    let visited = new Set();
    let queue = [[row, col]];

    while (queue.length) {
      let [r, c] = queue.shift();

      if (r === maze.length - 1 && c === maze[0].length - 1) {
        if (maze[r][c] === 0) {
          path.push([r,c]);
          return [currDist + 1, path];
        } else {
          return 0;
        }
      }

      if (maze[r][c] === 0 && !visited.has(`${r},${c}`)) {
        currDist += 1;
        path.push([r,c]);
        let validNeighbors = getNeighbors(r, c);
        for (let [x,y] of validNeighbors) {
          if (!visited.has(`${x},${y}`)) {
            queue.push([x,y]);
          }
        }
      }
      visited.add(`${r},${c}`);
    }
    return [currDist, path];
  }

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[0].length; j++) {
      if (maze[i][j] === 0) {
        let [dist, path] = bfsIterative(i, j);
        console.log(dist, path);
        if (shortestDistance < dist) {
          shortestDistance = dist;
          sourceToDestPath = path;
        }
      }
    }
  }

  if (shortestDistance === 0) {
    return null;
  } else {
    return sourceToDestPath;
  }
}

let maze = [[0, 0], [0, 0]];
console.log(getMazePath(maze));