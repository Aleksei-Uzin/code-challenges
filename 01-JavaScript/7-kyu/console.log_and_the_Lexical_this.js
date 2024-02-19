/**
 * "console.log" and the Lexical "this"
 * https://www.codewars.com/kata/56fa93d36883c783ec0001d1/train/javascript
 *
 */

const newConsole = console.log

console.log = value => {
  this.answer = value
  
  newConsole(value)
}
