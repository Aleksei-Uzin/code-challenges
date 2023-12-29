/**
 * You're not my type
 * https://www.codewars.com/kata/57157a7c2ad76331360002d0/train/javascript
 *
 */

Array.prototype.ofType = function (type) {
  return this.filter(item => {
    if (typeof item === 'object' || typeof item === 'function') {
      return item instanceof type
    } else {
      return typeof item === type.name.toLowerCase()
    }
  })
}
