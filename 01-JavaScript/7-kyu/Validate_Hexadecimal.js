/**
 * Validate Hexadecimal
 * https://www.codewars.com/kata/55a5a70c81e8541d990000bd/train/javascript
 *
 */

const isHex = str => /^([a-f\d]{3}|[a-f\d]{6})$/i.test(str)

// Best practice:
//
// const isHex = (str) => /^([0-9a-f]{3}){1,2}$/i.test(str)
