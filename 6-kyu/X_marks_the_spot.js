/**
 * X marks the spot!
 * https://www.codewars.com/kata/55cc20eb943f1d8b11000045/train/javascript
 *
 */

function x(n) {
  const matrix = []
  
  for(let i = 0; i < n; i++) {
    let subArr = new Array(n).fill(0)
    
    subArr[i] = 1
    subArr[n - i - 1] = 1

    matrix.push(subArr)
  }
  
  return matrix
}
