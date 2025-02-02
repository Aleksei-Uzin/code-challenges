/**
 * Simple fraction to mixed number converter
 * https://www.codewars.com/kata/556b85b433fb5e899200003f/train/javascript
 *
 */

const mixedFraction = s => {
  if (/\/0$/.test(s)) throw Error
  if (/^0/.test(s)) return '0'

  const [n1, n2] = (s.match(/\d+/g) || []).map(Number)
  const sign = (s.match(/-/g) || []).length === 1 ? '-' : ''
  const gcdRes = gcd(n1, n2)

  if (n1 < n2) {
    return `${sign}${n1 / gcdRes}/${n2 / gcdRes}`
  }

  const res = n1 / n2

  if (Number.isInteger(res)) {
    return `${sign}${res}`
  } else {
    const int = parseInt(res)
    const fl = n1 - int * n2
    return `${sign}${int} ${fl / gcdRes}/${n2 / gcdRes}`
  }
}

function gcd(a, b) {
  return !b ? a : gcd(b, a % b)
}
