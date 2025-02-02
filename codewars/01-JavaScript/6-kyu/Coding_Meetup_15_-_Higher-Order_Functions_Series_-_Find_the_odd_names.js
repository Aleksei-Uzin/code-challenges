/**
 * Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
 * https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript
 *
 */

const findOddNames = list =>
  list.filter(({ firstName }) =>
    !!(firstName.split('').map(char => char.charCodeAt(0)).reduce((acc, val) => acc + val, 0) % 2)
  )
