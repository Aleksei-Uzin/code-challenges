/**
 * A Letter from Your Niece
 * https://www.codewars.com/kata/589f8bb8423ac3576a00000b/train/javascript
 *
 */

const nonsense = str =>
  str
    .toLowerCase()
    .replace(/[01234]/g, m => 'aeiou'[m])
    .replace(/trex|raptor/g, '')
    .replace(/[a-z]/, m => m.toUpperCase())
    .replace(/\bi\b/g, 'I')
    .replace(/\w$/, '$&.')
