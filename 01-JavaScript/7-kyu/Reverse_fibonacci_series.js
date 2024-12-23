/**
 * Reverse fibonacci series
 * https://www.codewars.com/kata/550fac5249073256380002c0/train/javascript
 *
 */

const reverseFibo = n => {
  const res = [0, 1]

  for (let i = 2; i < n; i++) {
    res[i] = res[i - 2] + res[i - 1]
  }

  return res.reverse().join('')
}
