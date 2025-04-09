import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { nextPermutation } from '../nextPermutation.js'

const arr1 = [2, 4, 1, 7, 5, 0]
// Output: [2, 4, 5, 0, 1, 7]
// Explanation: The next permutation of the given array is {2, 4, 5, 0, 1, 7}.

const arr2 = [3, 2, 1]
// Output: [1, 2, 3]
// Explanation: As arr[] is the last permutation, the next permutation is the lowest one.

const arr3 = [3, 4, 2, 5, 1]
// Output: [3, 4, 5, 1, 2]
// Explanation: The next permutation of the given array is [3, 4, 5, 1, 2].

const requiredTests = [
  { arr: arr1, ans: [2, 4, 5, 0, 1, 7] },
  { arr: arr2, ans: [1, 2, 3] },
  { arr: arr3, ans: [3, 4, 5, 1, 2] },
]

describe('Next Permutation', () => {
  for (let { arr, ans } of requiredTests) {
    it(`should return ${ans}`, () => {
      nextPermutation(arr)
      assert.deepEqual(arr, ans)
    })
  }
})
