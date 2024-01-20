/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = new Array(cost.length + 1).fill(0);
  for (let i = 2; i < dp.length; i++) {
      let takeOneStep = dp[i - 1] + cost[i-1];
      let takeTwoStep = dp[i - 2] + cost[i-2];
      dp[i] = Math.min(takeOneStep, takeTwoStep);
  }
  return dp[dp.length - 1];
};