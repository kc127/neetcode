/*

413. Arithmetic Slices
Solved
Medium
Topics
Companies
An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.



Example 1:

Input: nums = [1,2,3,4]
Output: 3
Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
Example 2:

Input: nums = [1]
Output: 0


*/
/**
 * Optimal Solution with O(n) time 
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  let dp = new Array(nums.length).fill(0);
  let count = 0;
  for (let i = 2; i < nums.length; i++) {
      if (nums[i] - nums[i-1] === nums[i-1] - nums[i-2]) {
          dp[i] = 1 + dp[i-1];
          count += dp[i];
      }
  }
  return count;
};

/** Brute Force O(n^2) time */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
      let diff = nums[i+1] - nums[i];
      for (let j = i+2; j < nums.length; j++) {
          if (nums[j] - nums[j-1] === diff) {
              count++;
          } else {
              break;
          }
      }
  }
  return count;
};