/**
 * Reverse an Array
 * https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/reverse-an-array
 *
 * You are given an array of integers arr[]. Your task is to reverse the given array.
 *
 */

// A
const reverseArray = arr => {
  let n = arr.length

  for (let i = 0; i < n / 2; i++) {
    const temp = arr[i]
    arr[i] = arr[n - i - 1]
    arr[n - i - 1] = temp
  }

  return arr
}

// B
const _reverseArray = arr => {
  for (let i = 0, n = arr.length - 1; i < n; i++, n--) {
    ;[arr[i], arr[n]] = [arr[n], arr[i]]
  }

  return arr
}

console.log(reverseArray([1, 4, 3, 2, 6, 5]))
// [5, 6, 2, 3, 4, 1]

console.log(reverseArray([4, 5, 2]))
// [2, 5, 4]

console.log(reverseArray([1]))
// [1]
