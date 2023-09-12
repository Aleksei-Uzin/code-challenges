/**
 * The mean of two means
 * https://www.codewars.com/kata/583df40bf30065fa9900010c/train/javascript
 *
 */

const getMean = (arr, x, y) => {
  const len = arr.length
  let sum1 = 0
  let sum2 = 0

  if(x <= 1 || y <= 1 || x > len || y > len) return -1
  
  arr.forEach((n, i) => {
    if(i < x) {
      sum1 += n
    } 
    
    if(i >= len - y) {
      sum2 += n
    }
  })
  
  return ((sum1 / x) + (sum2 / y)) / 2
}

console.log(getMean([1, 3, 2, 4], 2, 8))
