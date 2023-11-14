/**
 * The Power of Exponents
 * https://www.codewars.com/kata/53270633b7320eeb0500031d/train/javascript
 *
 */

const power = (base, exponent) => {
  return exponent > 0 ? pow(base, exponent) : 1 / pow(base, -exponent)

  function pow(base, exp) {
    if (exponent === 0) return 1
    return exp === 1 ? base : base * pow(base, exp - 1)
  }
}
