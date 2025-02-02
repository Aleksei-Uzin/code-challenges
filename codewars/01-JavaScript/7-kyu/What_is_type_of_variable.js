/**
 * What is type of variable?
 * https://www.codewars.com/kata/57293671c98f77e84b000065/train/javascript
 *
 */

const type = value => {
  if (Array.isArray(value)) return 'array'
  if (value instanceof Date) return 'date'
  if (value === null) return 'null'
  else return typeof value
}

// Best practice
//
// function type(value) {
//   return {}.toString.call(value).slice(8, -1).toLowerCase();
// }
