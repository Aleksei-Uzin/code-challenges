/**
 * All, None & Any
 * https://www.codewars.com/kata/54589f3b52756d34d6000158/train/javascript
 *
 */

Array.prototype.all = function (p) {
  for (let item of this) {
    if (!p(item)) return false
  }

  return true
}

Array.prototype.none = function (p) {
  for (let item of this) {
    if (p(item)) return false
  }

  return true
}

Array.prototype.any = function (p) {
  for (let item of this) {
    if (p(item)) return true
  }

  return false
}
