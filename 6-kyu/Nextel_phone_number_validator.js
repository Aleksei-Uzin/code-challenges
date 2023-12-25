/**
 * Nextel phone number validator
 * https://www.codewars.com/kata/577fd3b89fb2a5f5d2000017/train/javascript
 *
 */

const isValidNextelPhoneNumber = str => /^\s*\d+(\s*\*\s*\d+){2}\s*$/.test(str)
