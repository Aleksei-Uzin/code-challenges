/**
 * Stringy Strings
 * https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
 *
 */

const stringy = size => {
  let str = ''
  
  for(let i = 0; i < size; i++) {
    if(i % 2) {
      str += '0'
      continue
    }
    
    str += '1'
  }
  
  return str
}
