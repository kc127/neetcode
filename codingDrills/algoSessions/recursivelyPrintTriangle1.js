/*
'''
Recursively Print Triangle

Use recursion to print an upside-down triangle of *X*s with a starting length k and tapering by 2 on subsequent levels. There should be the correct amount of leading spaces on each level. You can assume k will always be odd and positive.

Follow-up: Instead of being given an integer k, you're given an array of characters of odd length and must follow the same pattern of printing the triangle while using the array contents.  There should be the correct amount of leading spaces on each level. You can assume the array will always be odd and not None.

EXPLORE
BRAINSTORM
PLAN
IMPLEMENT
VERIFY

Assumptions/Observations/Edge Cases
1. Input is always odd and positive.

Brainstorm + Plan:
 Idea 1: recursion

alternate solution (k, i=0)

base case
  if k = 1'
  console.log/print (" ").repeat(i) + "x"

recursive
  console.log/print (" ").repeat(i) + "x".repeat(k)

  in return statement
    minus k by 2
    up i + 1




 MAIN FUNC(k)
  result array = []

    HELPER(i = k, )
      base case:
        when k = 1 || i === 0,
          add spaces
          let spaces = ""
          push X k times to result,    push to result => ("X".repeat(k))
          let res = spaces + new Array(k).fill("X");

          return;

       add spaces
       push X k times to result
       k = k - 2;

  HELPER()
  return array of strings in different lines

iteratively

result array = []

for loop from i = 0 to k
  if(i > 0) {result.push(" ") x i}
  result.push() x times k
  k = k - 2
  result.push("/")

return array.join('next line')



EXAMPLE(S)
printXTriangle(5)
XXXXX
 XXX
  X

     XXXXX
space XXX space
X

printXTriangle(1)
    X




printTriangle([a,b,c,d,e])
abcde
 bcd
  c


FUNCTION SIGNATURE
def printXTriangle(k: int) -> None:
def printTriangle(array: list[str]) -> None:
'''


alternate solution (k, i=0)

base case
  if k = 1'
  console.log/print (" ").repeat(i) + "x"

recursive
  console.log/print (" ").repeat(i) + "x".repeat(k)

  in return statement
    minus k by 2
    up i + 1
*/


// function printXTriangle(k, i = 0) {
//   if(k === 1) {
//     console.log(" ".repeat(i) + "X");
//     return;
//   }

//   console.log(" ".repeat(i) + "X".repeat(k));
//   return printXTriangle(k - 2, i + 1);
// }


/*

MAIN FUNC(k)
  result array = []

    HELPER(i = k, )
      base case:
        when k = 1 || i === 0,
          add spaces
          let spaces = ""
          push X k times to result,    push to result => ("X".repeat(k))
          let res = spaces + new Array(k).fill("X"); = ["X", "X", "X"]

          return;

       add spaces
       push X k times to result
       k = k - 2;

*/

function printXTriangle(k) {
  let result = [];

  function helper(k, i) {
    if (k === 1) {
      let spaces = " ".repeat(i);
      let x = "X";
      result.push(spaces + x);
      return;
    }
    //let str = " ".repeat(i) + "X".repeat(k);
    result.push(" ".repeat(i) + "X".repeat(k));
    helper(k - 2, i++);
  }

  helper(k, 0);
  return result.join('\n');
}


function printXTriangle(k, numSpaces=0) {
  if (k === 1) {
    console.log(" ".repeat(numSpaces) + "X")
    return
  }

  console.log(" ".repeat(numSpaces) + "X".repeat(k))
  return printXTriangle(k - 2, numSpaces + 1)
}

function printTriangle(charArray) {
  function triangleHelper(charArray, split=0) {
    console.log(" ".repeat(split) + charArray.slice(split, charArray.length - split).join(""))

    if (split < charArray.length / 2) {
      triangleHelper(charArray, split + 1)
    }
  }

  triangleHelper(charArray, 0)
}

printXTriangle(7); console.log("====")
// XXXXXXX
//  XXXXX
//   XXX
//    X

printXTriangle(5); console.log("====")
// XXXXX
//  XXX
//   X

printXTriangle(3); console.log("====")
// XXX
//  X

printXTriangle(1); console.log("====")
// X










