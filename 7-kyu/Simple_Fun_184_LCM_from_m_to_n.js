/**
 * Simple Fun #184: LCM from m to n
 * https://www.codewars.com/kata/58bcdc65f6d3b11fce000045/train/javascript
 *
 */

const mnLCM = (m, n) => {
  let min = Math.min(m, n)
  let max = Math.max(m, n)
  const arr = Array.from({ length: max - min + 1 }).map(() => min++)

  return arr.reduce((a, b) => (a * b) / gcd(a, b))
}

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}
