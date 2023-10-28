/**
 * Closing in Sum
 * https://www.codewars.com/kata/65126d52a5de2b11c94096d2/train/javascript
 *
 */

const closingInSum = n => {
  const str = n.toString().replace(/\D/, '')
  const len = str.length
  const mid = Math.floor(len / 2)
  let sum = len % 2 === 0 ? 0 : Number(str[mid])

  for (let i = 0; i < mid; i++) {
    sum += Number(str[i] + str[len - i - 1])
  }

  return sum
}
