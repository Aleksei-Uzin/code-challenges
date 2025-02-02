/**
 * RaNDoM CAsE
 * https://www.codewars.com/kata/57073869924f34185100036d/train/javascript
 *
 */

const randomCase = str => {
  let res = ''

  for(let i = 0; i < str.length; i++) {
    const isEven = Math.floor(Math.random() * 10) % 2 === 0
    
    if(isEven) {
      res += str[i].toUpperCase()
    } else {
      res += str[i].toLowerCase()
    }
  }
  
  return res
}
