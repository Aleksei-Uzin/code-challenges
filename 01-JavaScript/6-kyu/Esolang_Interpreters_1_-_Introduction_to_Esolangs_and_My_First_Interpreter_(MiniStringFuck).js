/**
 * Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck)
 * https://www.codewars.com/kata/586dd26a69b6fd46dd0000c0/train/javascript
 *
 */

function myFirstInterpreter(code) {
  const arr = code.split('')
  let res = ''
  let bites = 0
  
  arr.forEach(char => {
    if(char === '+') {
      bites = ++bites % 256
    }
    
    if(char === '.') {
      res += String.fromCharCode(bites)
    }
  })
  
  return res
}
