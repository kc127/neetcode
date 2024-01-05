/*
'''
Print all K-length increasing sequences

Given two positive integers *seqLen* and *upperBound*, print all increasing sequences of length *seqLen* such that the elements in every sequence are from the first *upperBound* natural numbers.

You can assume *seqLen* will be positive and <= *upperBound*. You may want to write a helper method to recurse easier.


EXAMPLE(S)
printSeq(seqLen=2, upperBound=3)
[1, 2]
[1, 3]
[2, 3]

printSeq(seqLen=3, upperBound=4)
[1, 2, 3]
[1, 2, 4]
[1, 3, 4]
[2, 3, 4]

printSeq(seqLen=1, upperBound=5)
[1]
[2]
[3]
[4]
[5]

printSeq(seqLen=1, upperBound=1)
[1]


FUNCTION SIGNATURE
def printSeq(seqLen: int, upperBound: int):
'''
Assumptions:
- sequence starts from 1
- upperBound starts from 1
- what if the input length is 0? - not possible
- upperBound is inclusive
- seqLen is positive and <= upperBound

Approaches:
  Algorithm: Backtracking

printSeq(seqLen=2, upperBound=3)
[1, 2]
[1, 3]
[2, 3]

                1,     2,      3
             2     3 1    3 1     2

    time = branches ^ level
         = upperBound ^ seqLen


[] => [1][2][3]
[1] => [1, 2][1, 3]
[2] => [2, 1] [2, 3]



  Base Case:


  Recursive
    for loop
      add step
      Backtrack
      remove step




EXPLORE
BRAINSTORM
PLAN
IMPLEMENT
VERIFY



*/

function printSeq(seqLen, upperBound) {

  function helper(currSeq, index) {
    if(currSeq.length === seqLen) {
      console.log(currSeq);
      return;
    }

    if(index > upperBound) {
      return;
    }

    currSeq.push(index);
    helper(currSeq, index+1);
    currSeq.pop();
    helper(currSeq, index+1);
  }

  helper([], 1)
}

// combinations
function printSeq(seqLen, upperBound) {

  function helper(currSeq, index = 1) {
    if(currSeq.length === seqLen) {
      console.log(currSeq);
      return;
    }

    // if (index > upperBound) {
    //   return;
    // }

    for (let i = index; i <= upperBound; i++) {
        currSeq.push(i);
        helper(currSeq, index + 1);
        currSeq.pop();
    }
  }

  helper([], 1)
}

/*
      input               line number
     seqLen=2, uB = 3     currSeq = [1], helper([1], 2) =
     helper([1], 2)       currSeq = [1, 2], helper([1, 2], 3) = returns, currSeq = [1]
     helper([1, 2], 3)    RETURNS;
*/

printSeq(2, 3); console.log("====")
// [1, 2]
// [1, 3]
// [2, 3]

printSeq(3, 4); console.log("====")
// [1, 2, 3]
// [1, 2, 4]
// [1, 3, 4]
// [2, 3, 4]

printSeq(3, 5); console.log("====")
// [1, 2, 3]
// [1, 2, 4]
// [1, 2, 5]
// [1, 3, 4]
// [1, 3, 5]
// [1, 4, 5]
// [2, 3, 4]
// [2, 3, 5]
// [2, 4, 5]
// [3, 4, 5]

printSeq(5, 5); console.log("====")
// [1, 2, 3, 4, 5]

printSeq(1, 5); console.log("====")
// [1]
// [2]
// [3]
// [4]
// [5]

// official solution
function printSeq(seqLen, upperBound) {
  function backtrack(startIndex, path) {
    // base case: our path is equal to sequence length
    if (path.length == seqLen) {
      console.log(path)
      return
    }

    for (let idx = startIndex; idx <= upperBound; idx++) {
      path.push(idx) // add to the path before recursing
      backtrack(idx+1, path) // start index should be current index + 1
      path.pop(idx) // remove from the path after unwinding
    }
  }

  return backtrack(1, []) // start at 1 because natural numbers
}

/**
 *
 *
 * The base case is when the current index you're manipulating equals the sequence length. The recursive algorithm gradually builds solutions that reach that length.
This involves backtracking to reach multiple avenues between 1 and the upper bound of a select length. The main challenge is enumerating all paths between 1 and the upper bound. The intuition is to recursively try subsequent numbers at each index, starting with 1. Eventually, the recursion will reach the base case and unwind. When the recursive function unwinds, remove the number added so the next iteration can try the following number at that index and recurse. This operation will continue until the current index reaches the upper bound.
Some paths cannot reach the sequence length because the iteration has reached the upper bound, and the algorithm cannot append and recurse further. These paths will subsequently not print since the sequence length is too short, as intended. We only want to print the paths matching an exact length.



Time: O(k*n!), where n is the upper bound and k is the length of the permutation. There are n! permutations of K length. We are only printing increasing sequences so there will be fewer than k*n! results.
Space: O(k), for the recursive call frames on the stack.
 */