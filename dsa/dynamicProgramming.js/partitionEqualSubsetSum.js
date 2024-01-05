/*

Given an array of numbers containing positive integers, return true if the array can be partitioned into two subsets so the sum of elements in both subsets is the same.

Example:
input: [2,3,4,5]
output: true ([3,4], [2,5])

input: [1,2,3,4,5]
output: false
*/

function solution(numbers) {

  let dp = new Array(numbers.length);
  for (let i = 0; i < dp.length; i++) {
      dp[i] = new Array(numbers.length).fill(0);
  }

  let uniqueSum = new Set();
  for (let i = 0; i < dp.length; i++) {
      for (let j = 0; j < dp[0].length; j++) {
          if (i > j) {
              continue;
          }
          if (i === j) {
              dp[i][j] = numbers[i];
          } else {
              dp[i][j] = numbers[i] + numbers[j];
          }

           console.log(dp);
          if (uniqueSum.has(dp[i][j])) {
              return true;
          } else {
              uniqueSum.add(dp[i][j]);
          }
      }
  }
  console.log(dp);
  return false;
}

/*
  0 1 2 3
  2 3 4 5
2   X 5 6 7
3   X X 7 8
4   X X X 9
5   X X X X

  1 2 3
1   X 3 4
2   X X 5
3   X X
*/
