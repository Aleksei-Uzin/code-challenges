/**
 * Character counts
 * https://www.codewars.com/kata/56b409febccd5aafbd000021/train/javascript
 *
 */

String.prototype.characterCount = function (charsToCount) {
  if (!charsToCount) return

  const res = []

  for (let i = 0; i < charsToCount.length; i++) {
    const char = charsToCount[i]
    const regStr = /[\w]/.test(char) ? char : `\\${char}`
    const chars = this.match(new RegExp(regStr, 'g'))
    res[i] = chars ? chars.length : 0
  }

  return charsToCount.length > 1 ? res : res[0]
}
