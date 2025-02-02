/**
 * String prefix and suffix
 * https://www.codewars.com/kata/5ce969ab07d4b7002dcaa7a1/train/javascript
 *
 */

const solve = s => s.match(/^(\w*).*\1$/)[1].length
