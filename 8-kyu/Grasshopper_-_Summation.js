/**
 * Grasshopper - Summation
 * https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
 *
 */

const summation = function(num) {
  let res = 0
  
  for(let i = 0; i <= num; res += i++);
    
  return res
}
