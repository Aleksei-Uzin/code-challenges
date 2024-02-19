/**
 * Return Two Highest Values in List
 * https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript
 *
 */

const twoHighest = arr => [...new Set(arr)]
  .sort((a, b) => b - a)
  .slice(0, 2)
