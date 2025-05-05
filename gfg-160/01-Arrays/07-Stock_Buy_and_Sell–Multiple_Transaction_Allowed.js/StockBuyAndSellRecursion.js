/**
 * Function to find the maximum profit Using Recursion
 *
 * My solution
 *
 */

function maxProfitRec(price, start, end) {
  let profit = 0

  for (let i = start; i < end; i++) {
    for (let j = i + 1; j <= end; j++) {
      if (price[j] > price[i]) {
        let curr =
          price[j] -
          price[i] +
          maxProfitRec(price, start, i - 1) +
          maxProfitRec(price, j + 1, end)

        profit = Math.max(profit, curr)
      }
    }
  }

  return profit
}

export function maximumProfit(prices) {
  return maxProfitRec(prices, 0, prices.length - 1)
}
