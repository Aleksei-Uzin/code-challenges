/**
 * Validate my Password
 * https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript
 *
 */

const validPass = pass =>
  /^((?=.*[a-z])(?=.*[0-9]))[a-z0-9]{4,19}$/i.test(pass) ? 'VALID' : 'INVALID'
