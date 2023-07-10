/**
 * @param {number[]} prices
 * @return {number}
 7 1 5 3 6 4
   b
            s

 maxPof = (-inf, -6)
 */
 var maxProfit = function(prices) {
  let b = 0;
  let s = 1;
  let maxProfit = 0;

  while (s < prices.length && b < prices.length - 1) {
      if (prices[s] > prices[b]) {
          maxProfit = Math.max(maxProfit, prices[s] - prices[b])
      } else {
          b = s;
      }
      s++;
  }
  return maxProfit;
};