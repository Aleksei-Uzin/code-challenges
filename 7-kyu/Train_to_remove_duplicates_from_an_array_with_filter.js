/**
 * Train to remove duplicates from an array with filter()
 * https://www.codewars.com/kata/58308360aeb69a460b0002b2/train/javascript
 *
 */

const unique = arr => arr.filter((val, i) => !arr.slice(0, i).includes(val))
