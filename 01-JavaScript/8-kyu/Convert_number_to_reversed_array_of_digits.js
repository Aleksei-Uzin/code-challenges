/**
 * Convert number to reversed array of digits
 * https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
 *
 */

function digitize(n) {
  const arr = (n).toString().split('').reverse()

  arr.forEach((x, i, arr) => arr[i] = +x)
  
  return arr
}

// Best Practice
//
// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }
//
// function digitize(n){
//   return (n + '').split('').map(Number).reverse()
// }
