/**
 * Mexican capital 's phone number validator
 * https://www.codewars.com/kata/577c136fdf78c163990007cd/train/javascript
 *
 */

const isValidMXPhoneNumber = str =>
  /^(5(5|6)|\(5(5|6)\))(\s?\d\d){3}$/.test(str)
