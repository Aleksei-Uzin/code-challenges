/**
 * Training JS #7: if..else and ternary operator
 * https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
 *
 */

function saleHotdogs(n) {
  if (n < 5) return n * 100

  return n < 10 ? n * 95 : n * 90
}

// Best Practice
//
// function saleHotdogs(n){
//   return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
// }
