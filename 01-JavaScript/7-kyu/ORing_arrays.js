/**
 * ORing arrays
 * https://www.codewars.com/kata/5ac5e9aa3853da25d9000102/train/javascript
 *
 */

const orArrays = (arr1, arr2, n = 0) => {
  const maxLen = Math.max(arr1.length, arr2.length)
  const res = []

  for (let i = 0; i < maxLen; i++) {
    const a = arr1[i] ?? n
    const b = arr2[i] ?? n
    res.push(a | b)
  }

  return res
}
