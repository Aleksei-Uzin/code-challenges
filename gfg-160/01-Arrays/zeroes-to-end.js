/**
 * Move All Zeroes to End
 * https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/move-all-zeroes-to-end-of-array0751
 *
 * Given an array arr[].
 * Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements.
 * Do the mentioned change in the array in place.
 *
 */

// A
const pushZerosToEnd = arr => {
  let c = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      ;[arr[i], arr[c]] = [arr[c], arr[i]]
      c++
    }
  }

  return arr
}

// B
const _pushZerosToEnd = arr => {
  let len = arr.length

  for (let i = 0; i < len; i++) {
    const n = arr[i]

    if (n === 0) {
      for (let j = i + 1; j < len; j++) {
        if (arr[j] !== 0) {
          const temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
          break
        }
      }
    }
  }

  return arr
}

console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]))
// [1, 2, 4, 3, 5, 0, 0, 0]

console.log(pushZerosToEnd([10, 20, 30]))
// [10, 20, 30]

console.log(pushZerosToEnd([0, 0]))
// [0, 0]
