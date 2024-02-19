/**
 * Holiday VIII - Duty Free
 * https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
 *
 */

const dutyFree = (normPrice, discount, hol) => Math.floor(hol / (normPrice * discount * 0.01))
