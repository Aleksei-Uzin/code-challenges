import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

// import { rotateArr } from '../rotateArr.js'
// import { rotateArrJugglingAlgo as rotateArr } from '../rotateArrJugglingAlgorithm.js'
import { rotateArrReversalAlgo as rotateArr } from '../rotateArrReversalAlgorithm.js'

const arr1 = [1, 2, 3, 4, 5]
const d1 = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.

const arr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
const d2 = 3
// Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
// Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.

const arr3 = [7, 3, 9, 1]
const d3 = 9
// Output: [3, 9, 1, 7]
// Explanation: when we rotate 9 times, we'll get 3 9 1 7 as resultant array.

const requiredTests = [
  { args: [arr1, d1], ans: [3, 4, 5, 1, 2] },
  { args: [arr2, d2], ans: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6] },
  { args: [arr3, d3], ans: [3, 9, 1, 7] },
]

describe('Rotate an Array by d - Counterclockwise or Left', () => {
  for (let { args, ans } of requiredTests) {
    it(`should return ${ans}`, () => {
      const [arr, d] = args
      rotateArr(arr, d)
      assert.deepEqual(arr, ans)
    })
  }
})
