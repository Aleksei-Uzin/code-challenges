/**
 * Max span
 * https://www.codewars.com/kata/5a3f26dbb6486aa9c3000081/train/javascript
 *
 */

const maxSpan = arr =>
  arr.reduce((max, n) => {
    let span = arr.lastIndexOf(n) - arr.indexOf(n)
    return max > span ? max : span + 1
  }, 0)
