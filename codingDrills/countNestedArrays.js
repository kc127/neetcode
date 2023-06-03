/*
'''
Count Nested Arrays

Given a nested array where each element may be 1) an integer or 2) an array, whose elements themselves may be integers or further arrays, count the total number of arrays.

What is the shape or pattern of this nested array structure? There can be empty lists but never None/null.


EXAMPLE(S)
countArrays([1, 2, 3]) == 1
countArrays([1, [1, 2, 3], 3]) == 2
countArrays([1, [1, [1, [1, [1]]]]]) == 5
countArrays([]) == 1
countArrays([1, []]) == 2
countArrays([1, [1, 2, []]]) == 3
countArrays([1, [[], 1, 2, []]]) == 4
countArrays([1]) == 1


FUNCTION SIGNATURE
function countArrays(array) {
def countArrays(nestedList: list) -> int:
'''


EXPLORE:
Counting arrays
empty array is still 1
no values can be null or none


BRAINSTORM:
Space:
Input: Array, Output: int;
Recursive

Iterative => Recursive:
[1, [1, 2, [3]], 3]

[] return 1   => EMPTY LIST

MAIN FUNC (array)

  - base case:
        if input is not an array, return 1;
  - variable result to store count of arrays intitilized to 0
  - traverse the input array
      if curr elem is an array
            result += MAIN FUNC (elem)
  - return result

PLAN:
Base case: if array in empty return 1


*/

//Formation
function countArrays1(array) {
  if (array == null)
    return 0

  let sumTotal = 1 // always count itself

  array.forEach(element => {
      if (Array.isArray(element))
          sumTotal += countArrays1(element)
  })

  return sumTotal
}


function countArrays(array) {
  if(array === null) return 0;
  let result = 1;

  for(let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      result += countArrays(array[i])
    }
  }
  return result;
}

/*

time: O(n)
space: O(d)

*/

console.log(countArrays([1, 2, 3, [[], [, []]]]))
console.log(countArrays([[]]))


console.log(countArrays1([1, 2, 3]) == 1)
console.log(countArrays1([1, [1, 2, 3], 3]) == 2)
console.log(countArrays1([1, [1, [1, [1, [1]]]]]) == 5)
console.log(countArrays1([1, [2,2], [3,3], [4,4], 5]) == 4)
console.log(countArrays1([1, [2, [], 2], [3,[6],3], [4,4], 5]) == 6)
console.log(countArrays1([[[[[[[[[[[[[]]]]]]]]]]]]]) == 13)
console.log(countArrays1([]) == 1)
console.log(countArrays1([[]]) == 2)
console.log(countArrays1([[],[],[]]) == 4)
console.log(countArrays(null) == 0)