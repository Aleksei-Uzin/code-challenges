import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

// import { maximumProfit } from '../StockBuyAndSell.js'
// import { maximumProfit } from '../StockBuyAndSellRecursion.js'
// import { maximumProfit } from '../StockBuyAndSellMinMax.js'
import { maximumProfit } from '../StockBuyAndSellAccumulateProfit.js'

const prices1 = [100, 180, 260, 310, 40, 535, 695]
// Output: 865
// Explanation:
// Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210.
// Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655.
// Maximum Profit = 210 + 655 = 865.

const prices2 = [4, 2, 2, 2, 4]
// Output: 2
// Explanation:
// Buy the stock on day 3 and sell it on day 4 => 4 – 2 = 2.
// Maximum Profit = 2.

const requiredTests = [
  { arr: prices1, ans: 865 },
  { arr: prices2, ans: 2 },
]

describe('Stock Buy and Sell – Multiple Transaction Allowed', () => {
  for (let { arr, ans } of requiredTests) {
    it(`should return ${ans}`, () => {
      const res = maximumProfit(arr)
      assert.deepEqual(res, ans)
    })
  }
})
