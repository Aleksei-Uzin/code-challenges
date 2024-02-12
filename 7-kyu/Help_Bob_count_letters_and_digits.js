/**
 * Help Bob count letters and digits.
 * https://www.codewars.com/kata/5738f5ea9545204cec000155/train/javascript
 *
 */

const countLettersAndDigits = input => input.replace(/[^a-z\d]/gi, '').length
