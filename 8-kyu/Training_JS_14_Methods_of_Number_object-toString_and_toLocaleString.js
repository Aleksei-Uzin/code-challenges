/**
 * Training JS #14: Methods of Number object--toString() and toLocaleString()
 * https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
 *
 */

const colorOf = (...colors) => {
  let hex = '#'
  
  colors.forEach(color => {
    hex += color.toString(16).padStart(2, 0)
  })
  
  return hex
}
