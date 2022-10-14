/**
 * Is he gonna survive?
 * https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/59ca8246d751df55cc00014c/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function hero(bullets, dragons){
  const isAlive = dragons * 2 <= bullets
  
  return isAlive ? true : false
}
