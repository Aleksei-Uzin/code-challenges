/**
 * CamelCase Method
 * https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
 *
 */

String.prototype.camelCase = function() {
  const arr = this.split(' ').map(word => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`)
  
  return arr.join('')
}
