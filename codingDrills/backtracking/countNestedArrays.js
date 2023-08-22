/*
'''
Count Nested Arrays

Given a nested array where each element may be 1) an integer or 2) an array, whose elements themselves may be integers or further arrays, count the total number of arrays.

What is the shape or pattern of this nested array structure? There can be empty lists but never None/null.

Assumptions/Observations/Edge Cases:
1. Every element in an array will be an integer or an array
2. An empty array returns 1
3. An array with integers but no other arrays inside also equals 1
4. The minimum count should be 1
5. Count of the arrays contribute to the total count.

Brainstorm:

Idea 1: Stack => maybe, iterative
Idea 2:
countArrays([1, [1, 2, 3], 3]) == 2
            [1, 2, 3] == 1

if (null) return 0
helper (index, currCount)
  if (index === arr.length) return
  index 0 => currCount >= 1  helper(index + 1, currCount)
  index 1 => helper(0, currCount + 1)
  index 2 => helper(index + 1, currCount)
          integer
          array

helper(0, 1)

EXAMPLE(S)
countArrays([1, 2, 3]) == 1
countArrays([1, [1, 2, 3], 3]) == 2
countArrays([1, [1, [1, [1, [1]]]]]) == 5
countArrays([]) == 1
countArrays([2]) == 1
countArrays([[]]) == 2
countArrays([22, []]) == 2
countArrays([22, [], 23]) == 2
countArrays([[], []]) == 3

FUNCTION SIGNATURE
function countArrays(array) {

'''
*/
/*
[1, [1, 2, 3]])
 i

    input              line
  i = 0, c = 1, array   line 74  = helper(1, 1, array) = 2
  i = 1, c = 1, array   line 72 = helper(0, 1 + 1, [1, 2, 3]) = 2
  i = 0, c = 2, [1, 2, 3]   line 74  = helper(1, 2, [1, 2, 3]) = 2
  i = 1, c = 2, [1, 2, 3]   line 74  = helper(2, 2, [1, 2, 3]) = 2
  i = 2, c = 2, [1, 2, 3]   line 74 = helper(3, 2, [1, 2, 3]) = return 2
  i = 3, c = 2, [1, 2, 3]   BASE CASE => return 2
*/


function countArrays(array) {
  if (array === null) return 0;
  let currCount = 1;

  function helper(index, array) {
    if (index >= array.length) {
      return;
    }
    if (Array.isArray(array[index])) {
      currCount = currCount + 1;
      helper(0, array[index]);
    }
    helper(index + 1, array);
  }

  helper(0, array);
  return currCount;
}

function countArrays(array) {
  if (array === null) return 0;
  let sumTotal = 1;
  for (let elem of array) {
    if (Array.isArray(elem)) {
      sumTotal += countArrays(elem);
    }
  }
  return sumTotal;
}

console.log(countArrays([1, 2, 3]) == 1)
console.log(countArrays([1, [1, 2, 3], 3]) == 2)
console.log(countArrays([1, [1, [1, [1, [1]]]]]) == 5)
console.log(countArrays([1, [2,2], [3,3], [4,4], 5]) == 4)
console.log(countArrays([1, [2, [], 2], [3,[6],3], [4,4], 5]) == 6)
console.log(countArrays([[[[[[[[[[[[[]]]]]]]]]]]]]) == 13)
console.log(countArrays([]) == 1)
console.log(countArrays([[]]) == 2)
console.log(countArrays([[],[],[]]) == 4)
console.log(countArrays(null) == 0)
console.log(countArrays([1, [1, 2, 3]]) == 2)