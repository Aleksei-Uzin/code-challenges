/**
 * uniq (UNIX style)
 * https://www.codewars.com/kata/52249faee9abb9cefa0001ee/train/javascript
 *
 */

const uniq = arr => arr.filter((val, i) => val !== arr[i + 1])
