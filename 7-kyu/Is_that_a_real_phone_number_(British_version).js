/**
 * Is that a real phone number? (British version)
 * https://www.codewars.com/kata/581a52d305fe7756720002eb/train/javascript
 *
 */

const validateNumber = str =>
  /^(-?07|\+447)(\-*\d){9}-?$/.test(str)
    ? 'In with a chance'
    : 'Plenty more fish in the sea'
