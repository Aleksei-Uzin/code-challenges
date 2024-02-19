/**
 * Number Pairs
 * https://www.codewars.com/kata/563b1f55a5f2079dc100008a/train/javascript
 *
 */

const getLargerNumbers = (a, b) => a.map((val, i) => Math.max(val, b.at(i)))
