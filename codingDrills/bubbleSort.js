/*
PAIR PROGRAMMING SESSION

Q. Given an unsorted array, perform bubble sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

EXPLORE:
- Insights & assumptions:
  - Empty array input is allowed []
  - Array of integers only
  - Can have duplicate values
  - Can have positive and negative integers in the array

- Meaningful test cases:

  array = [], output = []
  array1 = [1], output = [1]
  array2 = [1, 2, 1], output = [1, 1, 2]
  array3 = [-1, -2], output = [-2, -1]

BRAINSTORM:
- Approach: Bubble sort
- T: O(n^2) // nested loop, comparing adjacent elements
- S: O(1) //sort in place

PLAN:


IMPLEMENT:
function bubbleSort(arr) {

}

VERIFY:


*/

function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j]
        array[j] = temp;
      }
    }
  }
  return array;
}


function bubbleSort1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}


console.log(bubbleSort1([4, 3, 2, 1]), ' expect [1, 2, 3, 4]');
console.log(bubbleSort([4, 3, 2, 1]), ' expect [1, 2, 3, 4]');
console.log(bubbleSort1([]), 'expect []');
console.log(bubbleSort([]), 'expect []');
console.log(bubbleSort1([-1, -2]), 'expect [-2, -1]');
console.log(bubbleSort([-1, -2]), 'expect [-2, -1]');



