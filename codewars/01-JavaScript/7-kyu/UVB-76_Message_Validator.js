/**
 * UVB-76 Message Validator
 * https://www.codewars.com/kata/56445cc2e5747d513c000033/train/javascript
 *
 */

const validate = message => /^MDZHB \d\d \d{3} [A-Z]+( \d\d){4}$/.test(message)
