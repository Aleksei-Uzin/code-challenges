/**
 * One Line Task: GCD Function
 * https://www.codewars.com/kata/58a12162784e0cfe4700000d/train/javascript
 *
 */

GCDMeansGreatestCommonDivisorOrHighestCommonFactor = g = (a, b) =>
  b ? g(b, a % b) : a
