/**
 * Monkey's MATH 01: How many "ZERO"s?
 * https://www.codewars.com/kata/56c2acc8c44a3ad6e400050a/train/javascript
 *
 */

const countzero = s => {
  let res = (s.match(/\(\)/g) || []).length

  for (let l of s) {
    if (/[abdegopq069DOPQR]/.test(l)) res += 1
    if (/[%&B8]/.test(l)) res += 2
  }

  return res
}
