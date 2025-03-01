/**
 * Shortest code: Father and Son
 * https://www.codewars.com/kata/56f928b19982cc7a14000c9d/train/javascript
 *
 */

const sc = s =>
  s.replace(/./g, m => {
    const n = /[a-z]/.test(m) ? m.toUpperCase() : m.toLowerCase()
    return s.indexOf(n) >= 0 ? m : ''
  })
