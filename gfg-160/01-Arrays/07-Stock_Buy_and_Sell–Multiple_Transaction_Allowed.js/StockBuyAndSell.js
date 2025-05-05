/**
 * Function to find the maximum profit
 *
 * My solution
 *
 * Time Complexity:
 *  - O(n)
 *
 * Auxiliary Space:
 *  - O(1)
 *
 */

export function maximumProfit(prices) {
  let profit = 0

  for (let i = 0; i < prices.length - 1; i++) {
    const curr = prices[i]
    const next = prices[i + 1]

    if (curr < next) {
      profit += next - curr
    }
  }

  return profit
}
