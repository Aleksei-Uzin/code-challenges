/**
 * Find twins
 * https://www.codewars.com/kata/5834315e06f227a6ac000099/train/javascript
 *
 */

const elimination = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) !== i) return arr[i]
  }

  return null
}
