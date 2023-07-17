/**
 * Multiplication table for number
 * https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript
 *
 */

const multiTable = n => {
  let res = `1 * ${n} = ${n}`
  
  for(let i = 2; i < 11; i++) {
    res += `\n${i} * ${n} = ${i * n}`
  }
  
  return res
}
