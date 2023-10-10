/**
 * Regex validate PIN code
 * https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
 *
 */

const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin)
