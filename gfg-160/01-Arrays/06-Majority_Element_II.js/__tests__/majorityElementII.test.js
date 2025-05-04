import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

// import { findMajority } from '../majorityElementII.js'
// import { findMajority } from '../majorityElementIINestedLoops.js'
// import { findMajority } from '../majorityElementIIHashMap.js'
import { findMajority } from '../majorityElementIIBoyerMooresVotingAlgorithm.js'

const arr1 = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
// Output: [5, 6]
// Explanation: 5 and 6 occur more n/3 times.

const arr2 = [2, 2, 3, 1, 3, 2, 1, 1]
// Output: [1, 2]
// Explanation: 1 and 2 occur more n/3 times.

const arr3 = [1, 2, 3, 4, 5]
// Output: []
// Explanation: o candidate occur more than n/3 times.

const requiredTests = [
  { arr: arr1, ans: [5, 6] },
  { arr: arr2, ans: [1, 2] },
  { arr: arr3, ans: [] },
]

describe('Majority Element II', () => {
  for (let { arr, ans } of requiredTests) {
    it(`should return ${ans}`, () => {
      const res = findMajority(arr)
      assert.deepEqual(res, ans)
    })
  }
})
