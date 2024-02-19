/**
 * Compare Strings by Sum of Chars
 * https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/javascript
 *
 */

const getSum = str =>
  str.split('').reduce((acc, val) => acc + val.charCodeAt(0), 0)

const compare = (s1, s2) => {
  ;[s1, s2] = [s1, s2].map(str =>
    !str || /[\W\d\s]/.test(str) ? '' : str.toUpperCase()
  )

  return getSum(s1) === getSum(s2)
}
