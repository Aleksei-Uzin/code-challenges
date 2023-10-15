/**
 * Is valid identifier?
 * https://www.codewars.com/kata/563a8656d52a79f06c00001f/train/javascript
 *
 */

const isValid = idn => /^[a-zA-Z_$][\w$]*$/.test(idn)
