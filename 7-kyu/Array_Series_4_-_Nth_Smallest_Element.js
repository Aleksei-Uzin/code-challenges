/**
 * Nth Smallest Element
 * https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript
 *
 */

const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b).at(pos - 1)
