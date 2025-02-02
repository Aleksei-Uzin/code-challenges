/**
 * Regex Password Validation
 * https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript
 *
 * https://stackoverflow.com/questions/1559751/regex-to-make-sure-that-the-string-contains-at-least-one-lower-case-char-upper
 *
 */

const REGEXP = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))[a-zA-Z\d]{6,}$/
