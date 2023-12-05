/*
Given a chess board with a set of bishops, return the number of pairs of bishops that are attacking each other. Bishops will be given as an array of tuples.

Assumptions:
  1. bishops can attack each other diagonally.
  2. bishops can attack more than one bishop.

EXAMPLE(S)
ex: 1
Bishops: [(0, 0), (2, 2), (1, 2), (3, 0)]
Attacking Bishops :
 1) (0,0) (2,2)
 2) (3,0) (1,2)

This would look like this:
 0 1 2 3 4
0x . . . .
1. . x . .
2. . x . .
3x . . . .
4. . . . .

create a diagonal to bishop mapping
    diag (r + c)  :  bishops
      0+0    : [(0,0)]
      1+2    : [(1,2), (3,0)]
      2+2    : [(2,2)]

    diag (r - c) : bishops
    0-0 : [(0,0), (2,2)]

  result = 1



*/

function numberOfBishops(bishops) {
    let negDiagonalVals = {};
    let posDiagonalVals = {};
    let result = 0;

    for (let [r, c] of bishops) {
      let posVal = r + c;
      let negVal = r - c;
      if (negDiagonalVals[negVal]) {
        result += negDiagonalVals[negVal];
        negDiagonalVals[negVal]++;
      } else {
        negDiagonalVals[negVal] = 1;
      }

      if (posDiagonalVals[posVal]) {
        result += posDiagonalVals[posVal];
        posDiagonalVals[posVal]++;
      } else {
        posDiagonalVals[posVal] = 1;
      }
    }
    return result;
   }

  console.log(numberOfBishops([[0, 0], [2, 2], [1, 2], [3, 0]]), " expect 2")
  console.log(numberOfBishops([[0,0],[1,1],[2,2],[3,3]]), " expect 6")
  console.log(numberOfBishops([[1,0],[2,2]]), " expect 0")
  console.log(numberOfBishops([[0,0],[0,2],[1,1],[2,0],[2,2]]), " expect 6")
// '''
// Given a chess board with a set of bishops, return the number of pairs of bishops that are attacking each other. Bishops will be given as an array of tuples.


// EXAMPLE(S)
// ex: 1
// Bishops: [(0, 0), (2, 2), (1, 2), (3, 0)]
//             ^
// This would look like this:
//  0 1 2 3 4
// 0x . . . .
// 1. . x . .
// 2. . x . .
// 3x . . . .
// 4. . . . .

// Attacking Bishops :
//  1) (0,0) (2,2)
//  2) (3,0) (1,2)

//  + diag map: key is calculated as x+y for any co-ordinate
//         0 : (0,0)
//         4 : (2,2)
//         3 : (1,2),(3,0)

//         0 : 0
//         4 : 0
//         3 : 1

// - diag map:  key is calculated as x-y for any co-ordinate
//         0 : (0,0), (2,2)
//        -1 : (1,2)
//         3 : (3,0)

// (0,0) and (2,2)
// (x1-x2) and (y1-y2)
// we can not use slope because parallel lines have same slope
// In this case, there are 2 pairs of bishops attacking each other.

// ex: 2
// bishops: [(0,0),(1,1),(2,2),(3,3)]

//   0 1 2 3
// 0.a . . .
// 1.. b . .
// 2.. . c .
// 3.. . . d

// Attacking Pair of bishops
// (a,b), (a, c), (a, d), (b, c), (b, d), (c, d)

// result : 0+ 1(b is attacking only 1 bishp a) + 2 (c is attacking 2 bishop) + 3 ( d is attacking a,b,c) = 6

// https://en.wikipedia.org/wiki/Triangular_number

// pos diag map:
//     0: (0,0)
//     2: (1,1)
//     4: (2,2)
//     6: (3,3)
// neg diag map:
//     0: (0,0), (1,1), (2,2), (3,3)

//     0: 3

// (0,0) (2,2)
// (0,0) (1,1)
// (1,1) (2,2)
// result: 6

// ex: 3

// bishops: [(1,0),(2,2)]

//   0 1 2
// 0.. . .
// 1.x . .
// 2.. . x
// result: 0

// ex: 4

// bishops: [(0,0),(0,2),(1,1),(2,0),(2,2)]

// a . b
// . c .
// d . e

// result: 5
// (a,c) (a,e) (b,c) (b,d) (c,d),(c,e)

// notes:
//     the board wont be "updating"
//     we're given bishop positions, not a 2D matrix of a board

// Approach:

//     idea 1: brute force
//         - create 2 hashmaps to store the sum and difference
//         - iterate through the bishops and at curr bishop
//             - compute the sum of [x,y]
//             - compute the difference of [x,y]
//             - check the hashmap for sum/difference
//                  - store the sum/difference as the key, and bishop as the value

//          sum1 -> x,y,z
//          diff1 -> a,b,c
//          sum2 -> d,e,f
//          diff2 -> g,h,i

//          result += set(key) if value in the map isnt Null
//          increment set(key) after processing that bishop




// FUNCTION SIGNATURE
// def numberOfBishops(bishops): Int
// function pairsOfAttackingBishops(bishops)

// '''

// def numberOfBishops(bishops) -> int:
//     posDiag = {} # (x+y)
//     negDiag = {} # (x-y)
//     result = 0

//     for bishop in bishops:
//         # improvement: diff and sum are their own variables for readability
//         if (bishop[0] + bishop[1]) in posDiag:
//             result += posDiag[(bishop[0] + bishop[1])]
//             posDiag[(bishop[0]+ bishop[1])] += 1
//         else:
//             posDiag[(bishop[0]+ bishop[1])] = 1

//         if (bishop[0] - bishop[1]) in negDiag:
//             #print("difference", bishop[0] - bishop[1])
//             result += negDiag[(bishop[0]- bishop[1])]
//             negDiag[(bishop[0]- bishop[1])] += 1
//         else:
//             negDiag[(bishop[0]- bishop[1])] = 1

//     return result



// print(numberOfBishops([(0, 0), (2, 2), (1, 2), (3, 0)]), " expect 2")
// print(numberOfBishops([(0,0),(1,1),(2,2),(3,3)]), " expect 6")
// print(numberOfBishops([(1,0),(2,2)]), " expect 0")
// print(numberOfBishops([(0,0),(0,2),(1,1),(2,0),(2,2)]), " expect 6")

https://www.geeksforgeeks.org/count-pair-of-bishops-that-will-attack-each-other-on-a-n-x-n-chessboard/
