/**
 * Sum of Minimums!
 * https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript
 *
 */

const sumOfMinimums = arr => {
  let sum = 0
  
  arr.forEach(x => {
    sum += Math.min(...x)
  })
  
  return sum
}
