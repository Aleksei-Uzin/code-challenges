/**
 * Regexp Basics - is it a digit?
 * https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/567bf4f7ee34510f69000032/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

String.prototype.digit = function() {
  return /^\d$/g.test(this)
}
