/**
 * Which are in?
 * https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
 *
 */

const inArray = (arr1, arr2) =>
  arr1.filter(val => arr2.findIndex(item => item.includes(val)) !== -1).sort()
