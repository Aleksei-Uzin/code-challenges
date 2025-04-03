import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { pushZerosToEnd } from '../pushZerosToEnd.js'

const arr1 = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.

const arr2 = [10, 20, 30]
// Output: [10, 20, 30]
// Explanation: No change in array as there are no 0s.

const arr3 = [0, 0]
// Output: [0, 0]
// Explanation: No change in array as there are all 0s.

const requiredTests = [
  { arr: arr1, ans: [1, 2, 4, 3, 5, 0, 0, 0] },
  { arr: arr2, ans: [10, 20, 30] },
  { arr: arr3, ans: [0, 0] },
]

describe('Moves all zeros to end', () => {
  for (let { arr, ans } of requiredTests) {
    it(`should return ${ans}`, () => {
      pushZerosToEnd(arr)
      assert.deepEqual(arr, ans)
    })
  }
})
