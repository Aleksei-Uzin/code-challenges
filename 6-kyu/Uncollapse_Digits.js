/**
 * Uncollapse Digits
 * https://www.codewars.com/kata/5a626fc7fd56cb63c300008c/train/javascript
 *
 */

const uncollapse = digits =>
  digits
    .replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, '$& ')
    .trim()
