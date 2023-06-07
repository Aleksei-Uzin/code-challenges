/**
 * Highest and Lowest
 * https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
 *
 */

const highAndLow = numb => {
  const arr = numb.split(' ')
  
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}
