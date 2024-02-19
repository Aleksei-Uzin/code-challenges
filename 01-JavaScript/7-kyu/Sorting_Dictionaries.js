/**
 * Sorting Dictionaries
 * https://www.codewars.com/kata/53da6a7e112bd15cbc000012/train/javascript
 *
 */

const sortDict = dict =>
  Object.entries(dict)
    .sort(([a, a1], [b, b1]) => b1 - a1)
    .map(([key, val]) => [Number.parseInt(key) || key, val])
