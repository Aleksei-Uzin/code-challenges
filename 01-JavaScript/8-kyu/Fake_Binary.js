/**
 * Fake Binary
 * https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
 *
 */

function fakeBin(str){
  const arr = str.split('')
  
  arr.forEach((x, i, arr) => {    
    x < 5 ? arr[i] = 0 : arr[i] = 1
  })
  
  return arr.join('')
}
