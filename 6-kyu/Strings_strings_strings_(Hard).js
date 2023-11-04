/**
 * Strings, strings, strings (Hard)
 * https://www.codewars.com/kata/56d9439813f38853b40000e4/train/javascript
 *
 */

Array.prototype.toString = function () {
  return getString(this)

  function getString(...item) {
    return item
      .map(val => {
        if (Array.isArray(val)) return '[' + getString(...val) + ']'

        return typeof val === 'string' ? "'" + val + "'" : val.toString()
      })
      .join(',')
  }
}
