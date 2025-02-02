/**
 * Reduce My Fraction
 * https://www.codewars.com/kata/576400f2f716ca816d001614/train/javascript
 *
 */

const reduce = ([a, b]) => {
  const getGcd = (a, b) => (b !== 0 ? getGcd(b, a % b) : a)
  const gcd = getGcd(a, b)

  return [a / gcd, b / gcd]
}
