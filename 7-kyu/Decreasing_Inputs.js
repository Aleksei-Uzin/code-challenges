/**
 * Decreasing Inputs
 * https://www.codewars.com/kata/555de49a04b7d1c13c00000e/train/javascript
 *
 */

const add = (...arr) => Math.round(arr.reduce((acc, val, i) => acc + val / (i + 1), 0))
