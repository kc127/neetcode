/*

Q. Given a square matrix with a minimum length of 2 on each side, sum bottom right triangular portion.

Example 1:

Given:
[  [6, 4, 7],
   [1, 3, 2],
   [8, 9, 5]  ]
returns: 34 (7 + 3 + 2 + 8 + 9 + 5)

Explanation: The bottom right triangular portion is:

[  [      7],
   [   3, 2],
   [8, 9, 5]  ]
Example 2:

Given:
[  [6, 4, 7, 1],
   [1, 3, 2, 2],
   [0, 0, 5, 2],
   [8, 9, 5, 3]  ]
returns: 37

Explanation: The bottom right triangular portion is:

[  [         1],
   [      2, 2],
   [   0, 5, 2],
   [8, 9, 5, 3]  ]


*/

function solution(m) {
  let ans = 0;
  let i = 0;
  for (let r = m.length - 1; r >= 0; r--) {
      for (let c = i; c < m[0].length; c++) {
          ans += m[r][c];
      }
      i += 1;
  }
  return ans;
}
