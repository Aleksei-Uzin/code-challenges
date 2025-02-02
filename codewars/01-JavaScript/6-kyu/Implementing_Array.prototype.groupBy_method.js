/**
 * Implementing Array.prototype.groupBy method
 * https://www.codewars.com/kata/53c2c3e78d298dddda000460/train/javascript
 *
 */

Array.prototype.groupBy = function (fn) {
  return this.reduce((obj, val) => {
    const res = typeof fn === 'function' ? fn(val) : val

    if (!obj[res]) obj[res] = [val]
    else obj[res].push(val)

    return obj
  }, {})
}
