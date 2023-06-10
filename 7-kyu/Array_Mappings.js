/**
 * Array Mappings
 * https://www.codewars.com/kata/56e20642ddeb0f4fac000344/train/javascript
 *
 */

Array.prototype.map = function(foo) {
  const arr = []
  const len = this.length

  for(let i = 0; i < len; i++) {
    arr.push(foo(this[i]))
  }
  
  return arr
}
