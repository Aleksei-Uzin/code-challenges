/**
 * Work out is it falsy or truthy?
 * https://www.codewars.com/kata/583310c5dbeb310c34000352/train/javascript
 *
 */

const falsyOrTruthy = arr =>
  arr.length % 2 === 0 ? arr.filter(val => !!val) : arr.filter(val => !val)
