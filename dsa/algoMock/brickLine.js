/*
'''
Today, you will be given the problem of the Brick Wall:

Source: https://leetcode.com/problems/brick-wall/description/

There is a brick wall in front of you. The wall is rectangular and has several rows of bricks. The bricks have the same height but different width. You want to draw a vertical line from the top to the bottom and cross the least bricks.
The brick wall is represented by a list of rows. Each row is a list of integers representing the width of each brick in this row from left to right.
If your line go through the edge of a brick, then the brick is not considered as crossed. You need to find out how to draw the line to cross the least bricks and return the number of crossed bricks.

You want to return the least number of bricks that you'll need to cut through.

Assumptions:
1. The sum of the width of all the bricks in each row is the same.
2. The line can cut through gap.
3.

EXAMPLE 1:
[
  [1,2,2,1],
  [3,1,2],
  [1,3,2],
  [2,4],
  [3,1,2],
  [1,3,1,1]
]

Output: 2


                      -,--,--,-
                      ---,-,--,
                      -,---,--,
                      ,--,----,
                      ---,-,--,
                      -,---,-,-

Example 2:
  [
   [1,1],
   [2]
  ]
              -,-
              --,
output: 1

Example 3:
  [
    [1],
    [1],
    [1]
  ]
                  -
                  -
                  -

hint:
  go through each cell in the matrix,
      at each cell get the column index of the gap
      check if rest of the rows have the gap at the same column index
      if yes => keep track of the rows with maximum number of gaps

          solution: totals number of rows - number of rows with gaps at the same column index


Pseudocode:
      convert the inner array of the matrix into a string using join
          [
            '1,2'
            '1,1,1'
            '2,1',

            s,tr4
          ]

      let commasMap = {
        commaIndex : freq
          1: 3
          3: 1

      }
      iterate through the converted matrix
          at each string
              iterate through the string
                  if curr char is ","
                    update the commasMap

      iterate through the commasMap to get the max freq (total rows with max comma)

      return totals rows - max freq;


FUNCTION SIGNATURE
func minBricks(input: [[Int]]) -> Int
'''
*/

function minBricks(matrix) {
  let map = new Map()
  for (let i = 0; i < matrix.length; i++) {
    let position = 0;
    for (let j = 0; j < matrix[i].length-1; j++) {

    }
  }

  let gapMap
}
let matrix1 = [
  [1,2,2,1],
  [3,1,2],
  [1,3,2],
  [2,4],
  [3,1,2],
  [1,3,1,1]
]
console.log(minBricks(matrix1));