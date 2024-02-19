/**
 * RuplesJS #1: N Times Do
 * https://www.codewars.com/kata/567c48062bb1ede32200002a/train/javascript
 *
 */

Number.prototype.times = function(callback) {
  let n = Math.round(this)
  
  while(n > 0) {
    callback()
    n--
  }
}
