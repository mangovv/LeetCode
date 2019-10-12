/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length == 0) return 0;

  let min = prices[0],
    max = 0,
    sum = 0;

  for (let i = 1; i < prices.length; i++) {
    sum = prices[i] - min;
    min = Math.min(min, prices[i]);
    max = Math.max(sum, max);
  }
  return max;
};
