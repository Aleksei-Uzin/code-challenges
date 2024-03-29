/**
 * All unique
 * https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript
 *
 */

const hasUniqueChars = str => {
  for (let c of str) {
    if (str.indexOf(c) !== str.lastIndexOf(c)) return false
  }

  return true
}
