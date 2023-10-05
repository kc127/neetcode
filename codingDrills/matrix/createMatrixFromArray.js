/*

Q. Given a zero-indexed array a and integers m and n, construct a mxn matrix with array a's elements in the order they appear, filling the top rows first. If a matrix cannot be generated, return an empty matrix [].
**
Examples:
**

Input: a = [1, 2, 3, 4], m = 2, n=2
Output:
[
    [1, 2],
    [3, 4]
]
Input: a = [1, 2, 3, 4], m = 3, n=2
Output:
[
]
Input: a = [1, 2, 3, 4], m = 4, n=1
Output:
[
    [1],
    [2],
    [3],
    [4]
]

*/


function solution(a, m, n) {
  let matrix = [];
  let aLen = m * n;

  if (a.length !== aLen) return [];
  let k = 0;
  for (let i = 0; i < m && k < aLen; i++) {
      let newRow = []
      for (let j = 0; j < n && k < aLen; j++) {
          newRow.push(a[k])
          k++;
      }
      matrix.push(newRow);
  }
  return matrix;
}
