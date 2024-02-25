/**
 * Help Mr. E
 * https://www.codewars.com/kata/56ce2f90aa4ac7a4770019fa/train/javascript
 *
 */

const evenator = str =>
  str
    .replace(/[\?\!\.,_]/g, '')
    .replace(/\w+/g, m => (m.length % 2 ? `${m}${m.slice(-1)}` : m))
