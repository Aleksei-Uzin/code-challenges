/**
 * Play with two Strings
 * https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/train/javascript
 *
 */

const swapCase = c => (/^[a-z]$/.test(c) ? c.toUpperCase() : c.toLowerCase())
const compareStrings = (a, b) =>
  a.replace(/[a-z]/gi, m => {
    const arr = b.match(new RegExp(`[${m}]`, 'gi')) || []
    const len = arr.length
    return len % 2 === 1 ? swapCase(m) : m
  })
const workOnStrings = (a, b) => `${compareStrings(a, b)}${compareStrings(b, a)}`
