/**
 * Get the mean of an array
 * https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/563e320cee5dddcf77000158/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function getAverage(marks){
  const sum = marks.reduce((x, y) => x + y)

  return Math.floor(sum / marks.length)
}
