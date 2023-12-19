/**
 * Disagreeable ascii
 * https://www.codewars.com/kata/582cb3a637c5583f2200005d/train/javascript
 *
 */

const getWeight = name => {
  let res = 0

  for (let c of name) {
    if (/[a-z]/.test(c)) res += c.toUpperCase().charCodeAt(0)
    if (/[A-Z]/.test(c)) res += c.toLowerCase().charCodeAt(0)
  }

  return res
}
