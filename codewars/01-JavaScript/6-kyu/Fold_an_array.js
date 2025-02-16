/**
 * Fold an array
 * https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript
 *
 */

const foldArray = (arr, runs) => {
  if (!runs) return arr

  const len = arr.length
  const mid = Math.round(len / 2)
  const res = []

  for (let i = 0; i < mid; i++) {
    if (arr.length % 2 && i + 1 === mid) {
      res.push(arr[i])
    } else {
      res.push(arr[i] + arr[len - i - 1])
    }
  }

  return foldArray(res, runs - 1)
}
