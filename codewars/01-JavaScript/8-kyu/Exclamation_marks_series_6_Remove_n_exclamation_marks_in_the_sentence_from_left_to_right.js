/**
 * Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
 * https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript
 *
 */

const remove = (s, n) => (n > 0) ? remove(s.replace('!', ''), n - 1) : s
