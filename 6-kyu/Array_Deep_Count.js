/**
 * Array Deep Count
 * https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript
 *
 */

function deepCount(arr) {
  let sum = 0

  function countLength(arr) {    
    sum += arr.length

    for(let subArr of arr) {
      if(Array.isArray(subArr) ) {
        countLength(subArr)
      }
    }
  }

  countLength(arr)

  return sum
}
