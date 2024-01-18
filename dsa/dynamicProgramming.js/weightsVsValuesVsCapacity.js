// algo olympics dp benchmark
function solution(c, values, weights) {
  let dp = new Array(weights.length + 1).fill(0).map((val) => new Array(c + 1).fill(0));
  console.log(dp)
  for (let i = 1; i <= weights.length; i++) {
      for (let j = 1; j <= c; j++) {
          if (j === weights[i-1]) {
              dp[i][j] = Math.max(values[i-1], dp[i-1][j]);
          } else if (j > weights[i-1]) {
              dp[i][j] = Math.max(values[i-1] + dp[i-1][j- weights[i-1]], dp[i-1][j]);
          } else if (j < weights[i-1]) {
              dp[i][j] = dp[i-1][j];
          }
      }
  }
  console.log(dp)
  return dp[dp.length - 1][dp[0].length - 1];
}

/*
          j
      0 1 2 3 4 5
  0   0 0 0 0 0 0
6   1   0 6 1 1 1 1
9   2   0
13  3   0

f(c = 1, w = 1) = 1 + f(c = 1 - 1, w = 1-1) = 1 + f(c=0,w=0) = 1 + 0 = 1
f(c = 2, w = 1) = 1 + f(c = 2 - 1, w = 1-1) = 1 + f(c=1,w=0) = 1 + 0 = 1;
..
f(c = 1, w = 2)
*/
