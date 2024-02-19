/**
 * Grasshopper - Array Mean
 * https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript
 *
 */

const findAverage = nums => {
  const sum = nums.reduce((a, b) => a + b, 0)
  const len = nums.length
  
  return sum / len
}
