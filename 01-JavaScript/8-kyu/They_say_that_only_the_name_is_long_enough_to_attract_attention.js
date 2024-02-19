/**
 * They say that only the name is long enough to attract attention.
 * They also said that only a simple Kata will have someone to solve it.
 * This is a sadly story #1: Are they opposite?
 *
 * https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript
 *
 */

function isOpposite(s1,s2) {
  const len1 = s1.length
  const len2 = s2.length
  let res = true  
  
  if(!len1 || len1 !== len2) return !res
  
  for(let i = 0; i < len1; i++) {
    const isS1CharUpperCase = s1[i] === s1[i].toUpperCase()
    const isS2CharLowerCase = s2[i] === s2[i].toLowerCase()

    if(res) {
      res = isS1CharUpperCase === isS2CharLowerCase
    } else {
      break
    }
  }
  
  return res
}
