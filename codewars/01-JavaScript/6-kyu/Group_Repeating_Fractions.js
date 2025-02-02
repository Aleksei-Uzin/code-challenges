/**
 * Group Repeating Fractions
 * https://www.codewars.com/kata/5613475e4778aab4d600004f/train/javascript
 *
 */

const repeatingFractions = (numerator, denominator) => {
  const res = (numerator / denominator).toString()

  return res.includes('.') ? res.replace(/(\d)\1+(?!\.)/g, '($1)') : res
}
