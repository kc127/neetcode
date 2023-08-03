/**
 * 77. Combinations: backtracking problem
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let results = [];

  var backtrack = function(start = 1, result = []) {
      if (result.length === k) {
          results.push([...result]);
          return;
      }

      for (let i = start; i <= n; i++) {
          result.push(i);
          backtrack(i+1, result);
          result.pop();
      }
  }
  backtrack();
  return results;
};