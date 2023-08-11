function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let mid = Math.floor(nums.length/2);
  let leftNums = nums.slice(0, mid);
  let rightNums = nums.slice(mid);

  let leftSorted = mergeSort(leftNums);
  let rightSorted = mergeSort(rightNums);

  return merge(leftSorted, rightSorted);
}


function merge(left, right) {
  let m = 0;
  let mergedArr = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      mergedArr[m] = left[l];
      l++;
    } else {
      mergedArr[m] = right[r];
      r++;
    }
    m++;
  }

  while (l < left.length) {
    mergedArr[m] = left[l];
    l++;
    m++;
  }

  while (r < right.length) {
    mergedArr[m] = right[r];
    r++;
    m++;
  }
  return mergedArr;
}








