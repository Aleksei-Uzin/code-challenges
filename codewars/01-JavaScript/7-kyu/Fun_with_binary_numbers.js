/**
 * Fun with binary numbers
 * https://www.codewars.com/kata/5ce04eadd103f4001edd8986/train/javascript
 *
 */

const solution = (n, b) => {
  const res = []

  for (let i = b; i < 2 ** n; i++) {
    if (i & b) res.push(i)
  }

  return res
}
