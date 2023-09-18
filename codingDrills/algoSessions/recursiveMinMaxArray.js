/*
'''
❓ PROMPT
Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence.

Example(s)
findMinIndex([12, 1234, 45, 67, 1]) == 4
findMinIndex([10, 20, 30]) == 0
findMinIndex([8, 6, 7, 5, 3, 7]) == 4

findMaxIndex([12, 1234, 45, 67, 1]) == 1
findMaxIndex([10, 20, 30]) == 2
findMaxIndex([8, 6, 7, 5, 3, 7]) == 0

*/

function findMinIndex(array, i = 0) {
  let minIdx = 0;
  let minElem = array[0];

  function helper(array, i = 0) {
    if (array.length === i) return;

    if (array[i] < minElem) {
      minIdx = i;
      minElem = array[i];
    }
    helper(array, i + 1);
  }
  helper(array);
  return minIdx;
}

  function findMaxIndex(array) {
    let maxIdx = 0;
    let maxElem = array[0];

  function helper(array, i = 0) {
    if (array.length === i) return;

    if (array[i] > maxElem) {
      maxIdx = i;
      maxElem = array[i];
    }
    helper(array, i + 1);
  }
  helper(array);
  return maxIdx;
  }

console.log(findMinIndex([12, 1234, 45, 67, 1]), " expect 4 ");
console.log(findMinIndex([10, 20, 30]), " expect 0 ");
console.log(findMinIndex([8, 6, 7, 5, 3, 7]), " expect 4");

console.log(findMaxIndex([12, 1234, 45, 67, 1]), "expect 1 ") == 1
console.log(findMaxIndex([10, 20, 30]), " expect 2 ");
console.log(findMaxIndex([8, 6, 7, 5, 3, 7]), " expect 0 ");