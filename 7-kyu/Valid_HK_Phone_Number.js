/**
 * Valid HK Phone Number
 * https://www.codewars.com/kata/56f54d45af5b1fec4b000cce/train/javascript
 *
 */

const isValidHKPhoneNumber = num => /^\d{4} \d{4}$/.test(num)

const hasValidHKPhoneNumber = str => /\d{4} \d{4}/.test(str)
