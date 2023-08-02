/**
 * Sum without highest and lowest number
 * https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
 *
 */

const sumArray = arr => {
  if(!arr) return 0
  
  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, n) => acc + n, 0)
}
