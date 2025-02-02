/**
 * Triple Trouble
 * https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript
 *
 */

function tripleTrouble(one, two, three){
  const len = one.length
  let res = ''
  
  for(let i = 0; i < len; i++) {
    res += one[i] + two[i] + three[i]
  }
  
  return res
}
