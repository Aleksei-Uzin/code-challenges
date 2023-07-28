/**
 * Function composition
 * https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript
 *
 */

const compose =
  (...funcs) =>
  value =>
    funcs.reduceRight((acc, fn) => fn(acc), value)
