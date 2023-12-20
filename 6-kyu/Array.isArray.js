/**
 * Array.isArray
 * https://www.codewars.com/kata/525a4cab1650d76b8000084d/train/javascript
 *
 */

const isArray = arr => Object.prototype.toString.call(arr) === '[object Array]'
