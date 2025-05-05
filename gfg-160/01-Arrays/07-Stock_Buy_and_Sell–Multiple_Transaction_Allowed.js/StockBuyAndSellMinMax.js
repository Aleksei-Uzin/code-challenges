/**
 * Function to find the maximum profit: Local Minima and Maxima
 *
 * Time Complexity:
 *  - O(n)
 *
 * Auxiliary Space:
 *  - O(1)
 *
 */

export function maximumProfit(prices) {
  let lMin = prices[0]
  let lMax = prices[0]
  let n = prices.length
  let profit = 0
  let i = 0

  while (i < n - 1) {
    // Find local minima
    while (i < n - 1 && prices[i] >= prices[i + 1]) {
      i++
    }
    lMin = prices[i]

    // Local Maxima
    while (i < n - 1 && prices[i] <= prices[i + 1]) {
      i++
    }
    lMax = prices[i]

    // Add current profit
    profit += lMax - lMin
  }

  return profit
}
