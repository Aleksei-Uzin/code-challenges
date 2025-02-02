/**
 * Make them bark!
 * https://www.codewars.com/kata/5535572c1de94ba2db0000f6/train/javascript
 *
 */

// The contructor function Dog is preloaded
function Dog(name, breed, sex, age) {
  this.name = name
  this.breed = breed
  this.sex = sex
  this.age = age
}

Dog.prototype.bark = function () {
  return 'Woof!'
}
