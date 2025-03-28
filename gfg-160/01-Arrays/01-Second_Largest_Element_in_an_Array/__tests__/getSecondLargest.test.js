import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { getSecondLargest } from '../getSecondLargest.js'

const arr1 = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

const arr2 = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

const arr3 = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.

const requiredTests = [
  { params: arr1, ans: 34 },
  { params: arr2, ans: 5 },
  { params: arr3, ans: -1 },
]

describe('Second largest element', () => {
  for (let { params, ans } of requiredTests) {
    it(`should return ${ans}`, () => {
      const res = getSecondLargest(params)
      assert.strictEqual(res, ans)
    })
  }
})
