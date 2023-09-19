var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let found = false;
  let mid = left + Math.floor((right - left)/2);
  while (left <= right) {
      if (nums[mid] === target) {
         found = true;
         break;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
      mid = left + Math.floor((right - left)/2);
  }
  if (!found) return [-1,-1];

  let start = mid;
  let end = mid;

  while (nums[start] === target && nums[start - 1] === target) {
      start--;
  }
  while (nums[end] === target && nums[end + 1] === target) {
      end++;
  }
  return [start, end];
};