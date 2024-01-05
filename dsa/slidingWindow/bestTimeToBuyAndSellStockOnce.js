/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProf = 0;
  let bestBuy = prices[0];
  let bestSale = 0;
  for (let price of prices) {
      if (price > bestBuy) {
          bestSale = price;
          maxProf = Math.max(maxProf, bestSale - bestBuy);
      } else if (price < bestBuy) {
          bestBuy = price;
      }
  }
  return maxProf;
};