/**
 * Array.prototype.size()
 * https://www.codewars.com/kata/58638bd2210be9a9690001f7/train/javascript
 *
 */

Array.prototype.size = function () {
  let size = 0

  for (let item of this) {
    size++
  }

  return size
}
