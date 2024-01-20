/*

reuse pre-computed values
solve subproblems
top-down or bottom-up


First solution
Analyze
Subproblems
Turn it around



// GIven a set of coin denominations and a target value, come up with change that sums to the target value using min number of coins.

[10, 5, 2, 1], t = 9

// 5 + 2 + 2      3 coins
// 5 + 2 + 1 + 1  4 coins

// return the number of coins required

[3], t = 9
3 + 3 + 3 return 3

[3, 5, 4] t = 9
5 + 4, return 2

9, 8, 7, 6, 1,  target = 10

brute force idea
  sort it from largest to smallest
  for coin of coins
    compare largest coin
      if bigger skip
      else
        subtract from target
        totalCoins++
      if target == 0
        store #of coins in result
        result = Math.min(result, totalCoins)



[10, 6, 1]
target = 15

10, 1, 1, 1, 1, 1 => 6 coins
6, 6, 1, 1, 1 => 5 coins
1 ,1 1.. 1 (15 times)  => 15 coins
*/

const coinProblem = (coins, target) =>{

  const h = (index,target,totalCoins)=>{
    // console.log(index, target, totalCoins)
    if (target < 0) return Infinity
    if(target === 0){
      return totalCoins
      // minCoins = Math.min(minCoins,totalCoins)
      // return
    }
    if(index >= coins.length ){
      return Infinity
    }
    // try skipping it
    const result1 = h(index+1,target,totalCoins)
    // try using it
    let newTarget = target-coins[index]
    const result2 = h(index,newTarget,totalCoins+1)

    return Math.min(result1,result2)
  }

  coins = coins.sort((a,b)=>b-a)
  let minCoins = Infinity;

  // for(let coinIndex in coins){
  //   // console.log(coinIndex)
  //   h(coinIndex,target,0)
  // }
   return h(0, target, 0)

  // return minCoins === Infinity ? 0 : minCoins
}

const minCoins=(coins, target, totalCoins = 0, cache = {}) =>{
  if (target < 0) return Infinity

  if (target === 0) return totalCoins
  let result = Infinity

  for (let coin of coins) {
    // check the cache for an existing solution for target-coin ANd totalCoins + 1
    const key = (target - coin) + "," + (totalCoins + 1)
    if (key in cache) {
      result = Math.min(result, cache[key])
    } else {
      const subResult = minCoins(coins, target - coin, totalCoins + 1, cache)
      cache[key] = subResult
      result = Math.min(result, subResult)
    }

  }

  return result;
}

const minCoins2=(coins, target, totalCoins = 0, cache = {}) =>{
  const key = target + "," + totalCoins
  if (key in cache) return cache[key]

  if (target < 0) return Infinity

  if (target === 0) return totalCoins
  let result = Infinity

  for (let coin of coins) {
     result = Math.min(result, minCoins2(coins, target - coin, totalCoins + 1, cache))
    }

  cache[key] = result
  return result;
}


const minCoins3=(coins, target, cache = {}) =>{
  if (target in cache) return cache[target]

  if (target < 0) return Infinity

  if (target === 0) return 0
  let result = Infinity

  for (let coin of coins) {
     result = Math.min(result, 1 + minCoins3(coins, target - coin, cache))
    }

  cache[target] = result
  return result;
}


/*
 hashmap => "target, totalCoins": totalCoins






O(2^n) => O(options ^ decisions)

O(branch ^ depth)

            f()
      f()   f()
f()
      f()   f()
            f()
1     2     4     8     16    32     64
*/

console.log(minCoins([10, 5, 2, 1], 9), " expect 3");
console.log(minCoins([3], 9), " expect 3");
console.log(minCoins([3, 5, 4], 9), " expect 2");
console.log(minCoins([10, 6, 1], 15), " expect 5");
console.log(minCoins([20], 15), " expect 0");

console.log(coinProblem([10, 5, 2, 1], 9), " expect 3");
console.log(coinProblem([3], 9), " expect 3");
console.log(coinProblem([3, 5, 4], 9), " expect 2");
console.log(coinProblem([10, 6, 1], 15), " expect 5");
console.log(coinProblem([20], 15), " expect 0");


/*
                                     minCoins() using c1  t-c1-c1
               minCoins() using c1   minCoins() using c2  t-c1-c2
                                     minCoins() using c3  t-c1-c3

                                     minCoins() using c1  t-c2-c1
minCoins()     minCoins() using c2   minCoins() using c2
                                     minCoins() using c3

                                     minCoins() using c1
               minCoins() using c3   minCoins() using c2
                                     minCoins() using c3

1                    3                     9                     27               81
3^0                3^1                    3^2                  3^3                  3^4


O(C^T) vs O(2^(C or T or both)), C = number of coins , T = target
*/

/* bottom up with 2d matrix with O(amount * coins.length) time and space */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

  let dp = new Array(coins.length + 1).fill(0).map((val) => new Array(amount+1).fill(0));
  for (let i = 0; i < dp.length; i++) {
      dp[i][0] = 0;
  }
  for (let j = 0; j < dp[0].length; j++) {
      dp[0][j] = Infinity;
  }
  for (let i = 1; i <= coins.length; i++) {
      for (let j = 1; j <= amount; j++) {
          if (j < coins[i-1]) {
              dp[i][j] = dp[i-1][j]
          } else  {
              dp[i][j] = Math.min(dp[i-1][j], 1 + dp[i][j - coins[i-1]]);
          }

      }
  }
  return dp[dp.length-1][dp[0].length - 1] > amount ? -1 : dp[dp.length-1][dp[0].length - 1];
};

/* same solution as above with refactoring */

// how to get coin combination for optimal ways
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  let coinIndex = new Array(amount + 1).fill(-1);
  for (let i = 0; i < coins.length; i++) {
      for (let j = 1; j <= amount; j++) {
          if (coins[i] <= j) {
              dp[j] = Math.min(dp[j], 1 + dp[j - coins[i]]);
              coinIndex[j] = i;
          }
      }
  }
 // get the optimal coin combination
  let coinsCombination = [];
  let amt = amount;
  while (amt >= 0) {
      if (coinIndex[amt] === -1) break;
      let coin = coins[coinIndex[amt]];
      coinsCombination.push(coin);
      amt -= coin;
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};