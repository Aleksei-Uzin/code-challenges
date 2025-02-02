/**
 * Reverse a Number
 * https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript
 *
 */

const reverseNumber = n => {
  const [, sign, num] = /(\-?)(\d+)/.exec(n)
  const res = [...num].reverse().join('')

  return Number(`${sign}${res}`)
}
