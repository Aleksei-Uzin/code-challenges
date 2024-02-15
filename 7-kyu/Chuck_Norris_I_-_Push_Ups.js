/**
 * Chuck Norris I - Push Ups
 * https://www.codewars.com/kata/570564e838428f2eca001d73/train/javascript
 *
 */

const chuckPushUps = str => {
  if (typeof str !== 'string' || !str) return 'FAIL!!'
  if (!/[01]/.test(str)) return 'CHUCK SMASH!!'

  return /^\b\w+\b$/.test(str)
    ? parseInt(str.replace(/[^01]/g, ''), 2)
    : Math.max(...str.match(/[01]+/g).map(n => parseInt(n, 2)))
}
