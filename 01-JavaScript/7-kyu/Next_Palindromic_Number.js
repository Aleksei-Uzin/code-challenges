/**
 * Next Palindromic Number.
 * https://www.codewars.com/kata/56a6ce697c05fb4667000029/train/javascript
 *
 */

const nextPal = val => {
  const newVal = val + 1

  if (+newVal.toString().split('').reverse().join('') === newVal) return newVal

  return nextPal(newVal)
}
