/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let results = [];
  let subset = [];

  var dfs = function (i) {
      if (i >= nums.length) {
          results.push([...subset]);
          return;
      }

      // decision to include nums[i]
      subset.push(nums[i]);
      dfs(i+1);

      // decision to not include nums[i]
      subset.pop()
      dfs(i+1);
  }
  dfs(0);
  return results;
};