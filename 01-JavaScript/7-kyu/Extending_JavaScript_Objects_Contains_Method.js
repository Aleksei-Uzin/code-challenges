/**
 * Extending JavaScript Objects: Contains Method
 * https://www.codewars.com/kata/5813189b50326e3657000213/train/javascript
 *
 */

String.prototype.contains = function (substr, caseSens) {
  const regStr = /^[?\/]$/.test(substr) ? `\\${substr}` : substr
  return new RegExp(regStr, caseSens ? '' : 'i').test(this)
}
