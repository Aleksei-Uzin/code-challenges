/**
 * Count words
 * https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript
 *
 */

const countWords = str => str.split(/\s/g).filter(Boolean).length
