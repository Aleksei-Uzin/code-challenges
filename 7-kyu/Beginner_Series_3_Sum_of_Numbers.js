/**
 * Beginner Series #3 Sum of Numbers
 * https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
 *
 */

const getSum = (a, b) => {
  const arr = []
  const max = Math.max(a, b)
  const min = Math.min(a, b)
  
  for(let i = min; i <= max; i++) {
    arr.push(i)
  }
  
  return arr.reduce((accum, current) => accum + current, 0)
}
