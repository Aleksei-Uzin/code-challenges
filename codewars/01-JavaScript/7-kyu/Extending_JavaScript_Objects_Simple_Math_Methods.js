/**
 * Extending JavaScript Objects: Simple Math Methods
 * https://www.codewars.com/kata/581534b8d5fae4428e00001e/train/javascript
 *
 */

Number.prototype.add = function (n) {
  return this + n
}

Number.prototype.sub = function (n) {
  return this - n
}

Number.prototype.mul = function (n) {
  return this * n
}

Number.prototype.div = function (n) {
  return this / n
}

Number.prototype.pow = function (n) {
  return Math.pow(this, n)
}

Number.prototype.sqr = function (n) {
  return Math.sqrt(this)
}
