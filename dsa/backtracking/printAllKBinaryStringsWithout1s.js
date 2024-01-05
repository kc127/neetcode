/*
'''
Print all K-length binary strings without consecutive 1s

Given an integer *maxLen*, print all binary strings of size *maxLen* that don't have 1s next to each other. That is, no string should contain the substring 11, 111, 1111, 11111, etc. You can assume *maxLen* > 0.

Assumptions:
1. maxLen > 0
2.

EXAMPLE(S)
printBinaryWithoutConsecutive1s(maxLen=2)
00
01
10

printBinaryWithoutConsecutive1s(maxLen=3)
000
001
010
100
101

printBinaryWithoutConsecutive1s(maxLen=1)
0
1

printBinaryWithoutConsecutive1s(maxLen=4)

                      0_ _ _
                  01_ _   00_ _
              010_        000_         001 _
            0100 0101     0000 0001     0010

Time = Branch ^ levels = 2 ^ maxLen = O(2^n);
Space = maxLen = O(maxLen)

Approach:
   Backtracking -> recursive
      params => str = ""
   Base Case:
      1. when str len >= maxLen
        print the str
        return


   Recursive Case:
    backtrack(str + '0')
    if (str.last === 0 || !str)
      backtrack(str + '1')


EXPLORE X
BRAINSTORM
PLAN
IMPLEMENT
VERIFY

*/

function printBinaryWithoutConsecutive1s(maxLen) {

  function backtrack(str = "") {
    if (str.length >= maxLen) {
      console.log(str);
      return;
    }
    backtrack(str + "0");
    if (str[str.length - 1] !== "1" || str === "") {
      backtrack(str + "1");
    }
  }

  return backtrack();
}


printBinaryWithoutConsecutive1s(1)
// 0
// 1

console.log("=======")
printBinaryWithoutConsecutive1s(2)
// 00
// 01
// 10

console.log("=======")
printBinaryWithoutConsecutive1s(3)
// 000
// 001
// 010
// 100
// 101

console.log("=======")
printBinaryWithoutConsecutive1s(4)
// 0000
// 0001
// 0010
// 0100
// 0101
// 1000
// 1001
// 1010

console.log("=======")
printBinaryWithoutConsecutive1s(5)
// 00000
// 00001
// 00010
// 00100
// 00101
// 01000
// 01001
// 01010
// 10000
// 10001
// 10010
// 10100
// 10101