/**
 * Is he gonna survive?
 * https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
 * 
 */

function hero(bullets, dragons){
  const isAlive = dragons * 2 <= bullets
  
  return isAlive ? true : false
}
