/**
 * Sort rectangles and circles by area
 * https://www.codewars.com/kata/5a1de8a580171fb29f00005e/train/javascript
 *
 */

const sortByArea = arr =>
  arr
    .map(val => {
      const res = Array.isArray(val)
        ? val[0] * val[1]
        : Math.PI * Math.pow(val, 2)
      return Math.round(res * 100) / 100
    })
    .sort((a, b) => a - b)
