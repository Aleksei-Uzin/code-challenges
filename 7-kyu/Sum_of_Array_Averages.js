/**
 * Sum of Array Averages
 * https://www.codewars.com/kata/56d5166ec87df55dbe000063/train/javascript
 *
 */

const sum = (a, b) => a + b
const sumAverage = arr =>
  Math.floor(arr.map(item => item.reduce(sum) / item.length).reduce(sum))
