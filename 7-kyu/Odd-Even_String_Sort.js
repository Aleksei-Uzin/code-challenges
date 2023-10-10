/**
 * Odd-Even String Sort
 * https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript
 *
 */

const sortMyString = str => {
  let even = ''
  let odd = ''

  str.split('').forEach((val, i) => {
    i % 2 === 0 ? (even += val) : (odd += val)
  })

  return `${even} ${odd}`
}
