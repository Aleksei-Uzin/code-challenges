/**
 * Simple consecutive pairs
 * https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript
 *
 */

const pairs = arr => {
  let res = 0

  for (let i = 0; i < arr.length; i += 2) {
    if (Math.abs(arr[i] - arr[i + 1]) === 1) res += 1
  }

  return res
}
