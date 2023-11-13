/**
 * String to integer conversion
 * https://www.codewars.com/kata/54fdadc8762e2e51e400032c/train/javascript
 *
 */

const myParseInt = str =>
  /([a-z])|(\d\D+\d)|~/i.test(str) ? NaN : parseInt(str)
