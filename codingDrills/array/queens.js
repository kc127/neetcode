/* advanced arrays

Note: Write a solution with O(queries.length + queens.length + n) complexity and O(queries.length) additional memory, since this is what you would be asked to do during a real interview.

In chess, queens can move any number of squares vertically, horizontally, or diagonally. You have an n × n chessboard with some queens on it. You are given several queries, each of which represents one square on the chessboard. For each query square, determine whether it can be attacked by a queen or not.

Example

For n = 5, queens = [[1, 1], [3, 2]], and queries = [[1, 1], [0, 3], [0, 4], [3, 4], [2, 0], [4, 3], [4, 0]], the output should be
solution(n, queens, queries) = [true, false, false, true, true, true, false].

Here are the squares on this chessboard that can be attacked by a queen:

Only squares (0, 3), (0, 4), (2, 4), and (4, 0) are not under attack.

*/

function solution(n, queens, queries) {
  let squaresUnderAttack = [];
  let validRows = new Set();
  let validCols = new Set();
  let validPosDiags = new Set();
  let validNegDiags = new Set();

  for (let queen of queens) {
      let [r, c] = queen;
      validRows.add(r);
      validCols.add(c);
      validPosDiags.add(r+c);
      validNegDiags.add(r-c);
  }

  for (let query of queries) {
      let [r, c] = query;
      if (validRows.has(r) || validCols.has(c) || validPosDiags.has(r+c) || validNegDiags.has(r-c)) {
         squaresUnderAttack.push(true);
      } else {
         squaresUnderAttack.push(false);
      }
  }
  return squaresUnderAttack;
}