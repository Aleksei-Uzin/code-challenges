/**
 * Reverse and Invert
 * https://www.codewars.com/kata/5899e054aa1498da6b0000cc/train/javascript
 *
 */

const reverseInvert = arr =>
  arr
    .filter(n => Number.isInteger(n))
    .map(n => {
      const [, sign, num] = /(\-?)(\d+)/.exec(n)
      const reversed = [...num].reverse().join('')
      return sign ? +reversed : reversed * -1
    })
