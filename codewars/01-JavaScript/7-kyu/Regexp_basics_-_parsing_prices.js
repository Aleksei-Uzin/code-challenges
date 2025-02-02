/**
 * Regexp basics - parsing prices
 * https://www.codewars.com/kata/56833b76371e86f8b6000015/train/javascript
 *
 */

String.prototype.toCents = function () {
  const price = /^\$(\d+)\.(\d\d)$/.exec(this)

  return price ? +`${price[1]}${price[2]}` : null
}
