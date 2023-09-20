/*


*/
// O(n^2)
function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

// O(nlogn)
function mergeSort(nums) {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length)/2;
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let mergedArr = [];
  let mergeIdx = 0;
  let leftIdx = 0;
  let rightIdx = 0;

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
    mergedArr[mergeIdx++] = left[leftIdx++]
  }

  while (rightIdx < right.length) {
    mergedArr[mergeIdx++] = right[rightIdx++];
  }
  return mergedArr;
}

// O(n^2)
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let insertPoint = i;

    while (insertPoint && curr < nums[insertPoint - 1]) {
      nums[insertPoint] = nums[insertPoint - 1];
      insertPoint--;
    }
    nums[insertPoint] = curr;
  }
  return nums;
}


// O(nlogn)
function quickSort(nums) {
  if (nums.length <= 1) return nums;

  let pivot = nums[0];
  let left = [];
  let right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > pivot) {
      right.push(nums[i]);
    } else {
      left.push(nums[i]);
    }
  }

  left = quickSort(left);
  right = quickSort(right);

  let sorted =  left.concat(pivot, right);
  return sorted;
}

// O(n^2)

function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
  }
  return nums;
}


console.log(bubbleSort([4, 2, 10, 6, 6]), " expect [2, 4, 6, 6, 10]");

console.log(mergeSort([4, 2, 10, 6, 6]), " expect [2, 4, 6, 6, 10]");
console.log(mergeSort([100, 2, 10, 6, 6]), " expect [2, 4, 6, 6, 10]");

console.log(quickSort([4, 2, 10, 6, 6]), " expect [2, 6, 6, 10, 100]");
console.log(quickSort([100, 2, 10, 6, 6]), " expect [2, 4, 6, 6, 10]");

console.log(insertionSort([4, 2, 10, 6, 6]), " expect [2, 6, 6, 10, 100]");
console.log(insertionSort([100, 2, 10, 6, 6]), " expect [2, 4, 6, 6, 10]");

console.log(selectionSort([4, 2, 10, 6, 6]), " expect [2, 6, 6, 10, 100]");
console.log(selectionSort([100, 2, 10, 6, 6]), " expect [2, 4, 6, 6, 10]");



