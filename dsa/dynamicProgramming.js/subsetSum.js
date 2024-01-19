// solution has bugs
/*
'''
❓ PROMPT
Given a set of numbers S, and a sum K, write a function to compute whether there exists a subset of S whose elements add up to K.

Each element of S is unique and may only be used once in computing the sum.

Example(s)
doesSubsetSumExist([1,2,3], 6) == true (1+2+3=6)
doesSubsetSumExist([1,2,3], 5) == true (2+3=5)
doesSubsetSumExist([1,2,9], 4) == false (no sum exists)


🔎 EXPLORE
List your assumptions & discoveries:


Insightful & revealing test cases:


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()


📆 PLAN
Outline of algorithm #:


🛠️ IMPLEMENT
function doesSubsetSumExist(nums, sum) {
def doesSubsetSumExist(nums: list[int], sum: int) -> bool:


🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
function doesSubsetSumExist(nums, sum) {
  let dp = new Array(nums.length + 1).fill([]).map(val => new Array(sum + 1).fill(false));

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (nums[i-1] < j) {
        dp[i][j] = dp[i-1][j];
      } else if (nums[i-1] >= j) {
        dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
      }
    }
  }

  return dp[nums.length][sum];
 }

console.log(doesSubsetSumExist([1], 1));
console.log(doesSubsetSumExist([1,2,3], 5));
console.log(doesSubsetSumExist([1,2,9], 4) === false);
console.log(doesSubsetSumExist([], 4) === false);
console.log(doesSubsetSumExist([4], 4));
console.log(doesSubsetSumExist([1, 2, 3, 4, 5], 9));
console.log(doesSubsetSumExist([3, 5, 7, 9], 14));
console.log(doesSubsetSumExist([2, 4, 6, 8], 10));
console.log(doesSubsetSumExist([1, 3, 5, 7, 9], 84) === false);
console.log(doesSubsetSumExist([10, 20, 30, 40, 50], 9) === false);
console.log(doesSubsetSumExist([1, 2, 3, 4, 5], -1) === false);
console.log(doesSubsetSumExist([1, 2, 3, 4, 5], 0));