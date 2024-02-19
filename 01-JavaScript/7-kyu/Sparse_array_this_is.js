/**
 * Sparse array this is?
 * https://www.codewars.com/kata/561fe8dbd50efaa2e9000075/train/javascript
 *
 */

Array.prototype.isSparse = function () {
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) return true
  }

  return false
}
