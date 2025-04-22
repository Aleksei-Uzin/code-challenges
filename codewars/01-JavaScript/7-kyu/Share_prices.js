/**
 * Share prices
 * https://www.codewars.com/kata/5603a4dd3d96ef798f000068/train/javascript
 *
 */

const sharePrice = (invested, changes) =>
  changes.reduce((acc, p) => acc + (p * acc) / 100, invested).toFixed(2)
