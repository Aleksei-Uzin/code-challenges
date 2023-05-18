/**
 * Create Phone Number
 * https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
 * 
 */

function createPhoneNumber(numbers){
  const a = numbers.splice(0, 3).join('')
  const b = numbers.splice(0, 3).join('')
  const c = numbers.join('')
  
  const phone_numbe = `(${a}) ${b}-${c}`
  
  return phone_numbe
}
