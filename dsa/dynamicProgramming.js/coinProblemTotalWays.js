/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let dp = new Array(coins.length + 1).fill(0).map((val) => new Array(amount + 1).fill(0));

  for (let i = 0; i < dp.length; i++) {
      dp[i][0] = 1;
  }
  console.log(dp);
  for (let i = 1; i <= coins.length; i++) {
      for (let j = 1; j <= amount; j++) {
          if (j < coins[i - 1]) {
              dp[i][j] = dp[i-1][j];
          } else {
              dp[i][j] = dp[i-1][j] + dp[i][j - coins[i - 1]];
          }
      }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};