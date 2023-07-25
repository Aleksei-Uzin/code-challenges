/**
 * "this" is an other solution
 * https://www.codewars.com/kata/54834b3559e638b39d0009a2/train/javascript
 *
 */

class OnceNamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;

    return Object.freeze(this)
  }
}

function _OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + ' ' + this.lastName;
  
  Object.defineProperties(this, {
    firstName: { configurable: false, writable: false },
    lastName: { configurable: false, writable: false },
    fullName: { configurable: false, writable: false },
  })
}
