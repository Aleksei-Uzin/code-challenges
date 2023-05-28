/**
 * Counting sheep...
 * https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
 *
 */

function countSheeps(arr) {
  return arr.filter(x => x).length
}

// Best Practice
//
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }
