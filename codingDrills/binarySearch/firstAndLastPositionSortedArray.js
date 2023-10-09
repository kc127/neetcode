/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

  function findFirstTargetIndex() {

      let left = 0;
      let right = nums.length - 1;
      let firstIndex = -1;
      while (left <= right) {
          let mid = left + Math.floor((right - left)/2);
          if (nums[mid] == target) {
              firstIndex = mid;
              right = mid - 1;
          } else if (nums[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }

      return firstIndex;
  }

  function findLastTargetIndex() {
      let lastIndex = -1;
      let left = 0;
      let right = nums.length - 1;
      while (left <= right) {
          let mid = left + Math.floor((right - left)/2);
          if (nums[mid] === target) {
              lastIndex = mid;
              left = mid + 1;
          } else if (nums[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }

      return lastIndex;
  }
  return [findFirstTargetIndex(), findLastTargetIndex()];
};



/*

  5 5 5 7 7 7 7 7 8 9
                  m

*/