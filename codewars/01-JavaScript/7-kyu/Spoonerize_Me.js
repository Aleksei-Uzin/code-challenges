/**
 * Spoonerize Me
 * https://www.codewars.com/kata/56b8903933dbe5831e000c76/train/javascript
 *
 */

const spoonerize = words =>
  words.replace(/(\b\w)(\w+) (\b\w)(\w+)/, '$3$2 $1$4')
