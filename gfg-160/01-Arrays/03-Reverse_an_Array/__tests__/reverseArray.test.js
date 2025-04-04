import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { reverseArray } from '../reverseArray.js'

const arr1 = [1, 4, 3, 2, 6, 5]
// Output: [5, 6, 2, 3, 4, 1]
// Explanation: The elements of the array are 1 4 3 2 6 5. After reversing the array,
// the first element goes to the last position, the second element goes to the second last position and so on.
// Hence, the answer is 5 6 2 3 4 1.

const arr2 = [4, 5, 2]
// Output: [2, 5, 4]
// Explanation: The elements of the array are 4 5 2. The reversed array will be 2 5 4.

const arr3 = [1]
// Output: [1]
// Explanation: The array has only single element, hence the reversed array is same as the original.

const requiredTests = [
  { arr: arr1, ans: [5, 6, 2, 3, 4, 1] },
  { arr: arr2, ans: [2, 5, 4] },
  { arr: arr3, ans: [1] },
]

describe('Reverse the array', () => {
  for (let { arr, ans } of requiredTests) {
    it(`should return ${ans}`, () => {
      reverseArray(arr)
      assert.deepEqual(arr, ans)
    })
  }
})
