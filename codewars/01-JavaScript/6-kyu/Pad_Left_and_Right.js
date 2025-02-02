/**
 * Pad Left and Right
 * https://www.codewars.com/kata/5669ec539556f9e9f2000074/train/javascript
 *
 */

String.prototype.padLeft = function (ch, n) {
  n = n > this.length ? n - this.length : 0
  return `${ch.repeat(n)}${this}`
}

String.prototype.padRight = function (ch, n) {
  n = n > this.length ? n - this.length : 0
  return `${this}${ch.repeat(n)}`
}
