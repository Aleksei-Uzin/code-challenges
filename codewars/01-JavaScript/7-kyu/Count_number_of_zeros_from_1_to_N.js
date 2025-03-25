/**
 * Count number of zeros from 1 to N
 * https://www.codewars.com/kata/557cffec8c3e8e55cc00010f/train/javascript
 *
 */

const countZeros = n => {
  let res = 0

  for (let i = 10; i <= n; i++) {
    const zeros = `${i}`.match(/0/g) || []
    res += zeros.length
  }

  return res
}
