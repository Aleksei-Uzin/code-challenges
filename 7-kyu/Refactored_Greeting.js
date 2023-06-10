/**
 * Refactored Greeting
 * https://www.codewars.com/kata/5121303128ef4b495f000001/train/javascript
 *
 */

function Person(name) {
  this.name = name
}

Person.prototype.greet = function(yourName) {
  return "Hello " + yourName + ", my name is " + this.name
}
