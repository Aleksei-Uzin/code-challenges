/**
 * String array duplicates
 * https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript
 *
 */

const dup = s => s.map(val => val.replace(/([a-z])\1+/g, '$1'))
