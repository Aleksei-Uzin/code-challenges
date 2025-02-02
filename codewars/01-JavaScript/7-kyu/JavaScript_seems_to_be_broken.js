/**
 * JavaScript seems to be broken
 * https://www.codewars.com/kata/565d6d1696e154b51b000076/train/javascript
 *
 */

Array.prototype.join = function(separator) {
  let res = ''
  
  this.forEach((x, i, arr) => {
    i < arr.length - 1 ? res += `${x}${separator}` : res += x
  })
  
  return res
}

const semicolonSeparationToCommaSeparation = input => input.split(';').join(',')
