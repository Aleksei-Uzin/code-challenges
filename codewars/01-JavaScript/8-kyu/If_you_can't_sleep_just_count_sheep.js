/**
 * If you can't sleep, just count sheep!!
 * https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
 *
 */

const countSheep = num => {
  let res = ''
  
  for(let i = 1; i <= num; i++) {
    res += `${i} sheep...`
  }
  
  return res
}
