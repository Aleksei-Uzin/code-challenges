/**
 * Simple Fun #67: Array Change
 * https://www.codewars.com/kata/5893f43b779ce54da4000124/train/javascript
 *
 */

const arrayChange = arr => {
  let n = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] >= arr[i]) {
      const diff = arr[i - 1] - arr[i] + 1
      arr[i] = arr[i] + diff
      n += diff
    }
  }

  return n
}
