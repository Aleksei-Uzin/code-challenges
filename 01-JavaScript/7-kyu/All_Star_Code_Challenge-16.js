/**
 * All Star Code Challenge #16
 * https://www.codewars.com/kata/586566b773bd9cbe2b000013/train/javascript
 *
 */

const noRepeat = str => {
  for (let c of str) {
    if (str.indexOf(c) === str.lastIndexOf(c)) return c
  }

  return ''
}
