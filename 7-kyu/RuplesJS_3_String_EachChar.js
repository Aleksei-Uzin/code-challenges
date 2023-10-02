/**
 * RuplesJS #3: String EachChar
 * https://www.codewars.com/kata/56808724e7784d220c00003f/train/javascript
 *
 */

String.prototype.eachChar = function(arg) {
  const type = typeof arg
  const arr = [...this]

  switch(type) {
    case 'string':
      return arr.map(val => `${val}${arg}`).join('')
    case 'function':
      return arr.map(val => arg(val)).join('')
    default:
      throw new TypeError(`The argument is of type "${type}", instead "string" or "function".`)
  }
}
