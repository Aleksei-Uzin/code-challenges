/**
 * Hello Happy Codevarrior!
 * https://www.codewars.com/kata/53f9ee9f64b19d4b1d0001ed/train/javascript
 *
 */

function Warrior(name) {
  this._name = name
  
  this.name = function(newName) {
    if(newName) {
      this._name = newName
    }

    return this._name
  }
}
  
Warrior.prototype.toString = function() {
  return "Hi! my name's " + this.name()
}
