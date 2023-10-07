/**
 * Product Of Maximums Of Array (Array Series #2)
 * https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript
 *
 */

const maxProduct = (numbers, size) =>
  numbers
    .sort((a, b) => a - b)
    .slice(numbers.length - size)
    .reduce((acc, val) => (acc *= val), 1)
