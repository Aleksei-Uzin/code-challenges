/**
 * Reverse every other word in the string
 * https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
 *
 */

const getReverse = (word, i) => i % 2 ? word.split('').reverse().join('') : word

const reverse = str => str.trim().split(' ').map(getReverse).join(' ')
