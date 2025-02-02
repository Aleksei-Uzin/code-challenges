/**
 * Character Concatenation
 * https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/javascript
 *
 */

const charConcat = str => {
  let res = ''
  
  for(let i = 0, k = str.length - 1; i < k; i++, k--) {
    res += `${str[i]}${str[k]}${i + 1}`
  }
  
  return res
}
