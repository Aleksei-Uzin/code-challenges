/**
 * I need a lookup quick!
 * https://www.codewars.com/kata/56c6a67ed3702be0fc0017d8/train/javascript
 *
 */

Array.prototype.toDictionary = function (keyFn, valueFn) {
  const obj = {}

  for (let i = 0; i < this.length; i++) {
    if (!valueFn) obj[keyFn(this[i])] = this[i]
    else obj[keyFn(this[i])] = valueFn(this[i])
  }

  return obj
}
