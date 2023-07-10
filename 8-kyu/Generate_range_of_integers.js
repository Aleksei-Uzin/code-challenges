/**
 * Generate range of integers
 * https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
 *
 */

const generateRange = (min, max, step) => {
  const arr = []
  
  while(min <= max) {
    arr.push(min)
    min += step
  }
  
  return arr
}
