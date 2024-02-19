/**
 * Largest Elements
 * https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript
 *
 */

const largest = (n, arr) => {
  const sortedArr = arr.sort((a, b) => a - b)
  
  return n ? sortedArr.slice(-n) : []
}
