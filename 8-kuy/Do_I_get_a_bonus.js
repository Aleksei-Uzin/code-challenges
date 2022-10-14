/**
 * Do I get a bonus?
 * https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/56f6ad906b88de513f000d96/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function bonusTime(salary, bonus) {
  if(!bonus) {
    return `\u00A3${salary}`
  }
  
  return `\u00A3${salary * 10}`
}
