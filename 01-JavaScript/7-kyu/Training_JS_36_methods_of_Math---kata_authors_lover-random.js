/**
 * Training JS #36: methods of Math---kata author's lover:random()
 * https://www.codewars.com/kata/5735956413c2054a680009ec/train/javascript
 *
 */

const rndCode = () => {
  const symbols = '~!@#$%^&*'
  let code = ''
  
  for(let i = 1; i <= 8; i++) {
    if(i < 3) {
      code += String.fromCharCode(~~(12 * Math.random() + 65))
    } else if(i < 7) {
      code += ~~(9 * Math.random())
    } else {
      code += symbols[~~(symbols.length * Math.random())]
    }
  }

  return code
}
