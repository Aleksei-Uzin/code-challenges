/**
 * I'm longer than you!
 * https://www.codewars.com/kata/5963314a51c68a26600000ae/train/javascript
 *
 */

const longer = str =>
  str
    .split(' ')
    .sort((a, b) => a.length !== b.length ? a.length - b.length : a > b)
    .join(' ')
