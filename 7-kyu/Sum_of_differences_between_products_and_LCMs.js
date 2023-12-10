/**
 * Sum of differences between products and LCMs
 * https://www.codewars.com/kata/56e56756404bb1c950000992/train/javascript
 *
 * https://en.wikipedia.org/wiki/Least_common_multiple#Fundamental_theorem_of_arithmetic
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 *
 */

const sumDifferencesBetweenProductsAndLCMs = pairs => {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const lcm = (a, b) => (a === 0 && b === 0 ? 0 : (a / gcd(a, b)) * b)

  return pairs.reduce((acc, [a, b]) => acc + (a * b - lcm(a, b)), 0)
}
