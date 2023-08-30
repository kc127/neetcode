class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

class DLLNode {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

function arrayify(head) {
  let ptr = head
  var array = []
  while (ptr != null) {
    array.push(ptr.value)
    ptr = ptr.next
  }
  return array
}

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/*
'''
Flatten nested list sum

Given a nested array where each element may be 1) an integer or 2) an array, whose elements may be integers or other arrays, compute the sum of all the integers in the nested array.

What is the shape or pattern of this nested array structure?

As a follow-up, modify this code to multiply each list sum by its depth in the nesting. [1, 2] returns 3 since (1 + 2) is only inside one array.

However, [4, [2, 3]] returns 14 because the depth of [2, 3] is 2, so (2+3) * 2 = 10.
4 is added at the end to get 10 + 4 = 14.
While [4, [2, [3]]] returns 26 because the depth of [3] is 3 so 3 * 3 = 9.
Then the depth of [2, 9] is 2 so (2+9) * 2 = 22.
4 is added at the end to get  22 + 4 = 26.


EXAMPLE(S)
sumNestedList([1, 2, 3]) == 6
sumNestedList([1, [1, 2, 3], 3]) == 10
sumNestedList([1, [1, [1, [1, [1]]]]]) == 5

sumNestedListWithDepth([4, [2, 3]]) == 14 because 4 + (2+3)*2
sumNestedListWithDepth([4, [2, [3]]]) == 26 because 4+(2+ (3*3))*2


Assumptions/Questions
- sum everything and return (in original problem)
- need to loop through (or go through in some way) the element if it's an array

Edge Cases
- Input is deeply nested array but does not contain a value, return 0

Brainstorming
- Idea 1: Backtracking


helper(index, sum)
  base case:
      index === list.length
      return

  for (let i...)
    if typeof list[i] === integer
      sum += list[i]
    else
      helper()
      pop


Approach
-


FUNCTION SIGNATURE
function sumNestedList(list) {
function sumNestedListWithDepth(list) {

def sumNestedList(nestedList: list[int]) -> int:
def sumNestedListWithDepth(nestedList: list[int]) -> int:
'''
*/

// function sumBruteForce(list) {
//   let sum = 0;

//   for (let i = 0; i < list.length; i++) {
//     if (Array.isArray(list[i])) {
//       for ()
//     }
//   }
// }

// Maria's starter code (not working )
// function sumNestedList(list) {
//   let sum = 0;

//   function helper(index, currArray) {
//     if (index === list.length) return;

//     for (let i = index; i < currArray.length; i++) {
//       if (Array.isArray(currArray[i])) {
//         helper(0, currArray[i]);
//       } else {
//         sum += currArray[i];
//         helper(i + 1, currArray);
//       }

//     }
//   }
//   helper(0, list);
//   return sum;
// }

// helper(0, [2, 3])
// helper(0, [1, [2, 3], 4, 5, 6])

//     i = 0, adds to sum
//     i = 1, helper(0, [2, 3]) RETURNS
//     i = 2, adds to sum
//     i = 3, add

// Kanchan's code (works!)
function sumNestedList(list) {
  let sum = 0;

  function helper(currArray) {
    // base case: ??

    for (let i = 0; i < currArray.length; i++) {
      if (Array.isArray(currArray[i])) {
        helper(currArray[i]);
      } else {
        sum += currArray[i];
      }
    }
    return;
  }

  helper(list);
  return sum;
}

// console.log(sumNestedList([1,2,3]) == 6)
// console.log(sumNestedList([1,[2,3]]) == 6)
// console.log(sumNestedList([1,[2,[3]]]) == 6)
// console.log(sumNestedList([1,[1,2,3],3]) == 10)
// console.log(sumNestedList([1,[1,[1,[1,[1]]]]]) == 5)
// console.log(sumNestedList([1,[1,[2],[],[],[],3],3]) == 10)
// console.log(sumNestedList([1,[1,[2],[],[[[[]]]],[],3],3]) == 10)
// console.log(sumNestedList([1]) == 1)
// console.log(sumNestedList([[1]]) == 1)
// console.log(sumNestedList([[[1]]]) == 1)
// console.log(sumNestedList([[[[1]]]]) == 1)
// console.log(sumNestedList([[[[]]]]) == 0)

function sumNestedListWithDepth(list) {

  function helper(currArray, depth, depthSum = 0) {
    let currSum = 0;
    for (let i = 0; i < currArray.length; i++) {
      if (Array.isArray(currArray[i])) {
        currArray[i] = helper(currArray[i], depth + 1, depthSum);
      }
        currSum += currArray[i];
    }
    return currSum * depth
  }

  return helper(list, 1);
}




console.log(sumNestedListWithDepth([1,2,3]) == 6)
console.log(sumNestedListWithDepth([1,[2,3]]) == 11)
console.log(sumNestedListWithDepth([1,[2,[3]]]) == 23)
console.log(sumNestedListWithDepth([1,[1,2,3],3]) == 16)
console.log(sumNestedListWithDepth([1,[1,[1,[1,[1]]]]]) == 153)
console.log(sumNestedListWithDepth([1,[1,[2],[],[],[],3],3]) == 24)
console.log(sumNestedListWithDepth([1,[1,[2],[],[[[[]]]],[],3],3]) == 24)
console.log(sumNestedListWithDepth([1]) == 1)
console.log(sumNestedListWithDepth([[1]]) == 2)
console.log(sumNestedListWithDepth([[[1]]]) == 6)
console.log(sumNestedListWithDepth([[[[1]]]]) == 24)
console.log(sumNestedListWithDepth([[[[]]]]) == 0)