/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      let mid = left + Math.floor((right - left)/2);

      if (nums[mid] === target) {
          return mid;
      } else if (nums[mid] >= nums[left]) {
          if (target < nums[mid] && target >= nums[left]) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      } else {
          if (target <= nums[right] && target > nums[mid]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }
  return -1;
};