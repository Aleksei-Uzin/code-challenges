/**
 * Minimize Sum Of Array (Array Series #1)
 * https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
 *
 */

const minSum = arr => {
  const sortedArr = arr.sort((a, b) => a - b)
  const len = arr.length
  let res = 0

  for (let i = 0; i < len / 2; i++) {
    res += arr[i] * arr[len - 1 - i]
  }

  return res
}
