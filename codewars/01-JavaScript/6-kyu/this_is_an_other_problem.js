/**
 * "this" is an other problem
 * https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript
 *
 */

class NamedOne {
  constructor(first, last) {
    this._firstName = first
    this._lastName = last
    this._fullName = `${this._firstName} ${this._lastName}`
  }

  get firstName() { return this._firstName }
  set firstName(newFirstName) {
    this._firstName = newFirstName
    this._fullName = `${newFirstName} ${this._lastName}`
  }

  get lastName() { return this._lastName }
  set lastName(newLastName) {
    this._lastName = newLastName
    this._fullName = `${this._firstName} ${newLastName}`
  }

  get fullName() { return this._fullName }
  set fullName(newFullName) {
    const [newFirst, newLast] = newFullName.split(' ')

    if(!newFirst || !newLast) return this._fullName
    
    if(this._firstName !== newFirst) this._firstName = newFirst

    if(this._lastName !== newLast) this._lastName = newLast

    this._fullName = `${newFirst} ${newLast}`
  }
}

function _NamedOne(first, last) {
  this._firstName = first
  this._lastName = last
  this._fullName = this._firstName + ' ' + this._lastName

  return (function(first, last, full) {
    return {
      get firstName() { return first },
      set firstName(newFirstName) {
        first = newFirstName
        this.fullName = newFirstName + ' ' + last
      },

      get lastName() { return last },
      set lastName(newLastName) {
        last = newLastName
        this.fullName = first + ' ' + newLastName
      },

      get fullName() { return full },
      set fullName(newFullName) {
        const [newFirst, newLast] = newFullName.split(' ')

        if(!newFirst || !newLast) return full
        
        if(this.firstName !== newFirst) this.firstName = newFirst

        if(this.lastName !== newLast) this.lastName = newLast

        full = newFirst + ' ' + newLast
      }
    }
  })(this._firstName, this._lastName, this._fullName)
}

// Best Practice:
// function NamedOne(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//
//   Object.defineProperty(this, "fullName", {
//     set: function(value) {
//       var parts = value.split(" ");
//       if (parts.length === 2) {
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//       }
//     },
//     get: function() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   });
// }
