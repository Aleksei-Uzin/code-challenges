/**
 * simple calculator 
 * https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript
 *
 */

const calculator = (a, b, sign) => {
  const operations = {
    '+': () => a + b,
    '-': () => a - b,
    '*': () => a * b,
    '/': () => a / b,
  }
  
  if(typeof a !== 'number' || typeof b !== 'number' || !operations[sign]) return 'unknown value'
  
  return operations[sign]()
}
