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
Array Reduce Sum Recursively

Given an array of length n, consolidate the sum created by adding index pairs until there's only a single index.


EXAMPLE(S)
[1, 2, 3, 4, 5] => 48

Explanation:
* The next array would be [3, 5, 7, 9] because [1+2, 2+3, 3+4, 4+5]
* The next array would be [8, 12, 16] because [3+5, 5+7, 7+9]
* The next array would be [20, 28] because [8+12, 12+16]
* The final answer would be [48] because [20+28] and there are not enough operands to add


🔎 EXPLORE
 List your assumptions & discoveries:
 - goal: given an array of numbers, create an array where elements in the array are sum of index pairs (at least two elements in array, else return element from input array, or zero if empty input array)
 - add existing element with next element -> will have one less element in each successive array
 - reduce the size of the array until we have an array of length 1 (return the element in that array)

 Insightful & revealing test cases:


  🧠 BRAINSTORM
  What approaches could work?

  in English

  take 1st and 2nd elements -> add and push to candidate array
  take 2nd and 3rd elements -> add and push to candidate array
  etc. until reach end of array

  then do the same thing until array has one element, then return that element

  [2, 4, 6, 8]
   i  i1

  input                line
  [2, 4, 6, 8]         output = [6, 10, 14], recurse([6, 10, 14]) = 40
  [6, 10, 14]          output = [16, 24], recurse([16, 24]) = 40
  [16, 24]             output = [40], recurse([40]) = 40
  [40]                 RETURN 40

ALGORITHM:
   output = []

  if (output.length === 1) {
        return output[0]
  }

  for loop to go through input array
      if next element
        sum = arr[i] + arr[i+1]

  recursive(output)


  Idea 1: Brute Force


  Idea 2: Backtracking


  Algorithm 1:
  Time: 0(N^2)
  Space: 0(N)


   📆 PLAN
  Outline of algorithm #:



  🛠️ IMPLEMENT



   🧪 VERIFY
  Run tests. Methodically debug & analyze issues.


FUNCTION SIGNATURE
function reduceSum(array) {
}
*/

// function reduceSum(array) {
//   let output = [];

//   function helper(inputArray) {
//     console.log(inputArray, "inputArray");
//     // if (output.length === 1) {
//     //   return output[0];
//     // }


//     if (inputArray.length === 1) {
//       return inputArray[0];
//     } else if (inputArray.length === 0) {
//       return 0;
//     }
//     output = [];
//     for (let i = 0; i < inputArray.length; i++) {
//       if (inputArray[i + 1]) {
//         let sum = inputArray[i] + inputArray[i + 1];
//         output.push(sum);
//       }
//     }
//     return helper([...output]);

//   }

//   return helper([...array]);
// }



function reduceSum(array) {
    if (array.length === 1) {
      return array[0];
    }

    if (array.length === 0) return [];

    let output = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] !== undefined) {
        let sum = array[i] + array[i + 1];
        output.push(sum);
      }
    }

  return reduceSum(output);
}


console.log(reduceSum([1, 2, 3, 4, 5]) == 48)
console.log(reduceSum([5]) == 5)
console.log(reduceSum([]) == 0)
console.log(reduceSum([1, 3, 5]) == 12)
console.log(reduceSum([-5, 5]) == 0)
console.log(reduceSum([-5, 5, -5, 5]) == 0)
console.log(reduceSum([-5, 5, 5, -5]) == 20)
                        0, 10, 0




// Formation's solution  - using a new array

// function reduceSum(array) {
//   if (array.length == 0)
//     return 0

//   if (array.length == 1)
//     return array[0]

//   let output = []
//   for (let i = 0; i < array.length - 1; i++)
//     output.push(array[i] + array[i + 1])

//   return reduceSum(output)
// }


// Formation's solution - in place
// function reduceSum(array) {
//   if (array.length == 0)
//     return 0

//   if (array.length === 1)
//     return array[0]

//   for (let i = 0; i < array.length - 1; i++)
//     array[i] = array[i] + array[i + 1]

//   array.pop()

//   return reduceSum(array)
// }







