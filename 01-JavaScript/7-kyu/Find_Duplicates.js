/**
 * Find Duplicates 
 * https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript
 *
 */

const duplicates = arr => [...new Set(arr.filter((x, i) => arr.indexOf(x) !== i))]
