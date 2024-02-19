/**
 * Testing 1-2-3
 * https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
 *
 */

const number = arr => arr.map((x, i, arr) => arr[i] = `${i + 1}: ${x}`)
