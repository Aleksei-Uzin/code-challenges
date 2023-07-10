/**
 * Barking mad
 * https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/javascript
 *
 */

function Dog(breed) {
  this.breed = breed
}

Dog.prototype.bark = function() {
  return "Woof"
}

var snoopy = new Dog("Beagle")
var scoobydoo = new Dog("Great Dane")
