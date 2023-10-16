/**
Go is an ancient game played on a board of 19x19 grid of lines. Black and white stones are placed at the intersections of these lines. A group of stones of one color is considered a _connected_ if every stone in the group is reachable from every other, traveling horizontally or vertically. For example, the following shows a is a single connected white group because we can traverse through all stones without jumps or moving diagonally.

  0 1 2 3 4 5
0 + + W + + +
1 + + W + + +
2 + + W W + +
3 + + + W W +
4 + + + + + +
5 + + + + + +

A connected group of stones is captured when *all* adjacent points to the group are occupied by stones of the opposite color. Unoccupied intersections adjacent to a group of stones are called _liberties_. While playing the game, players must keep track of their groups and their liberty counts to look for strong moves to play.

The previous example group of white stones has 10 liberties. If the stone at (2, 3) is removed, it would be broken into two groups. The vertical group of three has 7 liberties, and the horizontal group of two has 6:

  0 1 2 3 4 5
0 + + W + + +
1 + + W + + +
2 + + W + + +
3 + + + W W +
4 + + + + + +
5 + + + + + +

Given a 19x19 board and an occupied position on the board, count the liberties of that connected group. Assume that the board is square and, at most 19x19, the size of a real Go board.


EXAMPLE(S)
countLiberties(
  [
    ['+', '+', '+'],
    ['+', 'W', '+'],
    ['+', '+', '+'],
  ],
  1, 1) == 4

countLiberties(
  [
    ['+', '+', '+'],
    ['+', 'B', 'B'],
    ['+', '+', 'B'],
  ],
  1, 1) == 4

Similar to the last example, but the new stone isn't connected.
countLiberties(
  [
    ['B', '+', '+'],
    ['+', 'B', 'B'],
    ['+', '+', 'B'],
  ],
  1, 1) == 4

countLiberties(
  [
    ['W', '+', 'W'],
    ['W', 'B', 'B'],
    ['W', 'W', 'B'],
  ],
  1, 1) == 1

countLiberties(
  [
    ['W', '+', 'W'],
    ['W', 'B', 'B'],
    ['W', 'W', 'B'],
  ],
  0, 0) == 1

countLiberties(
  [
    ['W', '+', 'W'],
    ['W', 'B', 'B'],
    ['W', 'W', 'B'],
  ],
  0, 1) == 0


countLiberties(
  [
    ['+', '+', '+', '+'],
    ['W', 'W', 'B', 'B'],
    ['+', '+', '+', '+'],
  ],
  1, 1) == 4


FUNCTION SIGNATURE
function countLiberties(board, x, y) {

Notes:
- 19x19 board max
- Possible to get an empty slot as input
- Graph question
  - Similar to numIslands potentially
  - Backtracking
  - DFS
  - BFS
  - Some type of GRAPH TRAVERSAL
- Finding the number of LIBERTIES:
  - Empty space ADJACENT to a non-empty space for a line
  - NO DIAGONAL ADJACENTS
  - LINE:
    - A cluster of similar colored stones that are directly adjacent (NOT DIAGONAL)

We want to find the number of LIBERTIES for a LINE given the COORDINATES provided

DFS traversal solution:
- Initialize libertyCounter to 0
- Initialize a visited set
- We need to start from the coordinates provided (x, y)
- We'll need to move in all directions (up, down, left, right)
- Set next coordinate as - currentCoordinate + direction
- If the next coordinate is in the visited set: continue
- Else: GO to the coordinate
  - Add current coordinates to visited set
  - Check current location type:
    - Same color:
      - Repeat
    - Opposite color:
      - Stop moving in that direction
    - Empty space:
      - Increment our libertyCounter
      - Stop


countLiberties(
  [
    ['+', '+', '+'],
    ['+', 'B', 'B'],
    ['+', '+', 'B'],
  ],
  1, 1) == 4

Frame 1: (1, 1)
- lc = 0
- visited = [(1, 1)]

Frame 2: (0, 1) -> '+'
- lc = 1
- visited = [(1,1), (0,1)]

Frame 3: (1, 1)
- lc = 1
- visited = [(1, 1), (0,1)]
- GO TO (2, 1) -> '+'

Frame 4: (2, 1) -> '+'
- lc = 2
- visited = [(1,1), (0,1), (2, 1)]
- increment our LC

Frame 5 (previously 3, previously 1)
- lc = 2
- visited = [(1,1), (0,1), (2, 1)]
- ALREADY CHECKED UP, DOWN.
- NOT YET CHECKED RIGHT, LEFT.
- GO RIGHT: (1, 2) -> NOT VISITED YET

Frame 6: (1, 2) -> 'B' SAME COLOR
- repeat: check left right up down
-
**/

let directions = [[-1, 0], [0, 1], [1, 0], [-1, 0]];


// DFS traversal solution:
function countLiberties_Kanchan(board, x, y) {
  // - Initialize libertyCounter to 0
  let libertyCounter = 0;
  // - Initialize a visited set
  let stoneColor = board[x][y];
  let oppositeColor = "";

  if (stoneColor === "W") {
    oppositeColor = "B"
  } else {
    oppositeColor = "W";
  }

  let visitedSet = new Set();
  visitedSet.add(`${x}${y}`)
  // - We need to start from the coordinates provided (x, y)
  // - We'll need to move in all directions (up, down, left, right)
  for (let [row, col] of directions) {
    // - Set next coordinate as - currentCoordinate + direction
    let deltaRow = x + row;
    let deltaCol = y + col;
  // - If the next coordinate is in the visited set: continue

    if (visitedSet.has(`${deltaRow}${deltaCol}`)) {
      continue;
    } else if (0 <= deltaRow && deltaRow < board.length && 0 <= deltaCol && deltaCol < board[0].length){
      // - Else: GO to the coordinate
    // - Add current coordinates to visited set
      visitedSet.add(`${deltaRow}${deltaCol}`);
    // - Check current location type:
      if (board[deltaRow][deltaCol] === stoneColor) {
          // - Same color:
        // - Repeat
        // Make sure that we're persisting out VISITED and LC
           countLiberties_Kanchan(board, deltaRow, deltaCol)
      } else if (board[deltaRow][deltaCol] === oppositeColor) {
          // - Opposite color:
        // - Stop moving in that direction
        continue;
      } else if (board[deltaRow][deltaCol] === "+") {
        // - Empty space:
        // - Increment our libertyCounter
        // - Stop
        libertyCounter++;
        continue;
      }
    }

  }
  return libertyCounter;
}


// DFS traversal solution:
function countLiberties_Daria(board, x, y) {
  let libertyCounter = 0
  // - Initialize libertyCounter to 0
  let visited = new Set()
  // - Initialize a visited set
  let firstType = board[x][y]

  const dfs = (x1, y1) => {
    if(x1 < 0 || x1 > board.length || y1 < 0 || y1 > board[0].length
      || visited.has((`${x1},${y1}`)) || firstType !== board[x1][y1]){
      return ;
    }

    visited.add((`${x1},${y1}`))
    if(board[x1][y1]  == "+") {
      libertyCounter++
      return
    }

    dfs(x1-1, y1)
    dfs(x1+1 , y1)
    dfs(x1, y1 - 1)
    dfs(x1, y1 + 1)
  }
  dfs( x, y)
  return libertyCounter
  // - We need to start from the coordinates provided (x, y)
  // - We'll need to move in all directions (up, down, left, right)
  // - Set next coordinate as - currentCoordinate + direction
  // - If the next coordinate is in the visited set: continue
  // - Else: GO to the coordinate
    // - Add current coordinates to visited set
    // - Check current location type:
      // - Same color:
        // - Repeat
      // - Opposite color:
        // - Stop moving in that direction
      // - Empty space:
        // - Increment our libertyCounter
        // - Stop
}




// DFS traversal solution:
function countLiberties_Gitaek(board, x, y) {
  const m = board.length
  const n = board[0].length
  let dir = [-1, 0, 1, 0, -1]

  // - Initialize libertyCounter to 0
  let libertyCounter = 0
  // - Initialize a visited set
  let visited = new Set()

  function dfs(r, c) {
    let stone = board[r][c]
    let oppositeStone = stone === 'W' ? 'B' : 'W'

    let stack = []
    stack.push([r,c])
    visited.add(`${r},${c}`)

    while(stack.length > 0) {
      let [pr, pc] = stack.pop()

      for(let i = 0; i<4; i++) {
        const mr = pr + dir[i]
        const mc = pc + dir[i+1]

        if(mr < 0 || mr >= m || mc < 0 || mc >= n ||
          board[mr][mc] === oppositeStone || visited.has(`${mr},${mc}`)) continue

        if(board[mr][mc] === '+') {
          visited.add(`${mr}, ${mc}`)
          libertyCounter += 1
          continue
        } else {
          stack.push([mr, mc])
          visited.add(`${mr}, ${mc}`)
        }
      }
    }
  } // dfs end

  dfs(x,y)
  return libertyCounter
  // - We need to start from the coordinates provided (x, y)
  // - We'll need to move in all directions (up, down, left, right)
  // - Set next coordinate as - currentCoordinate + direction
  // - If the next coordinate is in the visited set: continue
  // - Else: GO to the coordinate
    // - Add current coordinates to visited set
    // - Check current location type:
      // - Same color:
        // - Repeat
      // - Opposite color:
        // - Stop moving in that direction
      // - Empty space:
        // - Increment our libertyCounter
        // - Stop

}

for(const CountLiberties of [countLiberties_Kanchan, countLiberties_Daria, countLiberties_Maria, countLiberties_Gitaek]) {

    const board = [
      ['+', '+', '+'],
      ['+', 'B', 'B'],
      ['+', '+', 'B'],
    ]

    console.log(CountLiberties(board, 1, 1), 4)

    console.log('--------------')
}


























/**
https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
https://neetcode.io/practice
https://docs.google.com/document/d/1AlvBk1M_vYvDm_d6LBEVR645qSoCay6d2BX_4jBXql8/edit?usp=sharing


3 Levels to Algorithm Mastery
1. Understanding the Base Algorithm
    - Sort problems by topic
    - Sort by difficult, easy -> hard
    - Grind out the easy questions and try to understand them as much as you can.
    - Look at the discussion/solution to get clarity if stuck.
2. Identifying Algorithm in Questions
    - For every question you do in the above section, go to the left tab and look at the "Similar Questions" section.
    - Do every question within 1-level-higher of the similar questions.
    - Really look at the question, and try and find hints to affirm that the algorithm you used previously applies to this question.
3. Modifying Algorithm for Specific Questions
    - As you do the above questions, solve the question utilizing your previous solution and change the pieces that need to be changed.
    - Recommend NOT looking at the solution/discussion until you feel like you're at the point of (mental/emotional) failure

Study Guide:
- Copy/Paste the Question and Implementation
- Write a paragraph summary in human-readable format explaining the solution
* Keep track of the questions that you didn't do well on
    - Come back to that question a week later
A week before any of your big interviews, allocate time to do questions filtered by company/frequency
    - These will have questions you'll most likely getsa
    - You should be more comfortable around questions like this, that you haven't seen before
    - And you'll get more exposure around those questions
    - NOTE: I got a shit ton of those most-frequent questions in my interviews
**/