/*
'''
Recursively Print Triangle

Use recursion to print an upside-down triangle of *X*s with a starting length k and tapering by 2 on subsequent levels. There should be the correct amount of leading spaces on each level. You can assume k will always be odd and positive.

Follow-up: Instead of being given an integer k, you're given an array of characters of odd length and must follow the same pattern of printing the triangle while using the array contents.  There should be the correct amount of leading spaces on each level. You can assume the array will always be odd and not None.


EXAMPLE(S)
printXTriangle(5)
XXXXX
 XXX
  X

printTriangle([a,b,c,d,e])
abcde
 bcd
  c


FUNCTION SIGNATURE
def printXTriangle(k: int) -> None:
def printTriangle(array: list[str]) -> None:
'''

Target runtime and space complexity

Time: O(k), where k is the input integer or the length of the array.
Space: O(k), for the recursive call frames on the stack.

The base case for both problems is when k or the length of the array is 1. You will need to prepend a space each time to make sure the characters are correctly aligned.

*/
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
