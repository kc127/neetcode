/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
      let m = l + Math.floor((r - l)/2);
      if (nums[m] === target) {
          return m;
      } else if (nums[m] < target) {
          l = m + 1;
      } else {
          r = m - 1;
      }
  }
  return -1;
};