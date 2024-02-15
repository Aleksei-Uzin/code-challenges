/**
 * Valid number to 2 decimal places
 * https://www.codewars.com/kata/55f9064161541a9e01000001/train/javascript
 *
 */

const validNumber = num => /^(\-|\+)?\d*\.\d\d$/.test(num)
