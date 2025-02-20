/**
 * One Line Task: String Merge!
 * https://www.codewars.com/kata/59e56007b2c32c12330000ad/train/javascript
 *
 */

stringMerge = (a, b, l) => a.split(l)[0] + b.slice(b.indexOf(l))
