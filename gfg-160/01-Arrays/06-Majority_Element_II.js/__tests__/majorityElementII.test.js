import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { findMajority } from '../majorityElementII.js'

const arr1 = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
// Output: [5, 6]
// Explanation: 5 and 6 occur more n/3 times.

const arr2 = [1, 2, 3, 4, 5]
// Output: []
// Explanation: o candidate occur more than n/3 times.

const requiredTests = [
  { arr: arr1, ans: [5, 6] },
  { arr: arr2, ans: [] },
]

describe('Majority Element II', () => {
  for (let { arr, ans } of requiredTests) {
    it(`should return ${ans}`, () => {
      const res = findMajority(arr)
      assert.deepEqual(res, ans)
    })
  }
})
