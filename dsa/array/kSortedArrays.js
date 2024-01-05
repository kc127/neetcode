/*
Given k sorted arrays, merge all the arrays into a single array.

Each array is sorted in ascending order.
*/
function solution(m) {
  if (m.length <= 1) return m[0];
  let newList = [];
  let i = m.length - 1;
  while (m.length > 1) {
      let lastArr = m.pop();
      let secondLastArr = m.pop();
      let newMergedArr = merge(secondLastArr, lastArr);
      console.log(newMergedArr)
      m.push(newMergedArr);
  }
  return m[0];
}

function merge(left, right) {
  let leftIdx = 0;
  let rightIdx = 0;
  let mergeIdx = 0;
  let mergedArr = [];
  //console.log(left, right)
  while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
          mergedArr[mergeIdx] = left[leftIdx];
          leftIdx++;
      } else {
          mergedArr[mergeIdx] = right[rightIdx];
          rightIdx++;
      }
      mergeIdx++;
  }

  while (leftIdx < left.length) {
      mergedArr[mergeIdx] = left[leftIdx];
      leftIdx++;
      mergeIdx++;
  }
  while (rightIdx < right.length) {
      mergedArr[mergeIdx] = right[rightIdx];
      rightIdx++;
      mergeIdx++;
  }

  return mergedArr;
}
