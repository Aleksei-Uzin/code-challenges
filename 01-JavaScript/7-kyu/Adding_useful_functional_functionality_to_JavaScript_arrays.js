/**
 * Adding useful functional functionality to JavaScript arrays 
 * https://www.codewars.com/kata/52195c9bb576caf14200007f/train/javascript
 *
 */

Array.range = function(start, count) {
  const arr = []

  while(count) {
    arr.push(start++)
    count--
  }
  
  return arr
}

Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0)
}
