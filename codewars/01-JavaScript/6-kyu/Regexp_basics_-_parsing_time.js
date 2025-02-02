/**
 * Regexp basics - parsing time
 * https://www.codewars.com/kata/568338ea371e86728c000002/train/javascript
 *
 */

String.prototype.toSeconds = function () {
  if (!/^(\d\d)(:[0-5]\d){2}$/.test(this)) return null

  const [hh, mm, ss] = this.split(':').map(Number)

  return hh * 3600 + mm * 60 + ss
}
