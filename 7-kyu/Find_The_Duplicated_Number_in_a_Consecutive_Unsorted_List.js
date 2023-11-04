/**
 * Find The Duplicated Number in a Consecutive Unsorted List
 * https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript
 *
 */

const findDup = arr => {
  for (let val of arr) {
    if (arr.indexOf(val) !== arr.lastIndexOf(val)) return val
  }
}
