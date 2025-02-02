/**
 * Monotone travel
 * https://www.codewars.com/kata/54466996990c921f90000d61/train/javascript
 *
 */

const isMonotone = arr => arr.every((n, i) => (arr[i - 1] || -Infinity) <= n)
