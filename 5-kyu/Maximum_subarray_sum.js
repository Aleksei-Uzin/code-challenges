/**
 * Maximum subarray sum
 * https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
 * 
 * https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
 * https://en.wikipedia.org/wiki/Maximum_subarray_problem
 *
 */

const maxSequence = arr => {
  let localMax = 0
  let globalMax = 0
  
  arr.forEach(x => {
    localMax = Math.max(x, x + localMax)
    
    if(localMax > globalMax) globalMax = localMax
  })
  
  return globalMax
}
