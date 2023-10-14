/**
 * Ghostbusters (whitespace removal)
 * https://www.codewars.com/kata/5668e3800636a6cd6a000018/train/javascript
 *
 */

const ghostBusters = building =>
  /\s/.test(building)
    ? building.replace(/\s/g, '')
    : "You just wanted my autograph didn't you?"
