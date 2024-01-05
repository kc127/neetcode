/*

Q. Given a square matrix with a minimum length of 2 on each side, sum top left triangular portion.

Example 1:

Given:
[  [6, 4, 7],
   [1, 3, 2],
   [8, 9, 5]  ]
returns: 29 (6+4+7+1+3+8)

Explanation: The top left triangular portion is:

[  [6, 4, 7],
   [1, 3   ],
   [8      ]  ]
Example 2:

Given:
[  [6, 4, 7, 1],
   [1, 3, 2, 2],
   [0, 0, 5, 2],
   [8, 9, 5, 3]  ]
returns: 32

Explanation: The top left triangular portion is:

[  [6, 4, 7, 1],
   [1, 3, 2   ],
   [0, 0      ],
   [8         ]  ]


*/

function solution(m) {
  let triangularSum = 0;
  let colLen = m[0].length - 1;

  for (let i = 0; i < m.length; i++) {
      let j = 0;
      for (j = colLen; j >= 0; j--) {
          triangularSum += m[i][j];
      }
      colLen--;
  }
  return triangularSum;
}
