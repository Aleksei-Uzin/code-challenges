/**
 * Thinkful - List and Loop Drills: Lists of lists
 * https://www.codewars.com/kata/586e1d458cb711f0a800033b/train/javascript
 *
 */

const processData = data =>
  data.map(([a, b]) => a - b).reduce((acc, n) => acc * n, 1)
