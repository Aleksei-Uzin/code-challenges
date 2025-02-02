/**
 * Count the smiley faces!
 * https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
 *
 */

const countSmileys = arr =>
  arr.filter(val => /^[-:;~]{1,2}[)D]$/.test(val)).length
