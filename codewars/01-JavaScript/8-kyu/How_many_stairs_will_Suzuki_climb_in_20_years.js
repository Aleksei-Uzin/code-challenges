/**
 * How many stairs will Suzuki climb in 20 years?
 * https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/javascript
 *
 */

const stairsIn20 = s => s
  .flat()
  .reduce((a, b) => a + b * 20, 0)
