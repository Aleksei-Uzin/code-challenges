/**
 * Divide and Conquer
 * https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
 *
 */

const divCon = arr => {
  let sum1 = 0
  let sum2 = 0
  
  arr.forEach(x => {
    typeof x === 'number' ? sum1 += x : sum2 += Number(x)
  })
  
  return sum1 - sum2
}
