/**
 * Are there doubles?
 * https://www.codewars.com/kata/56a24b4d9f3671584d000039/train/javascript
 *
 */

const doubleCheck = str => /(\w)\1|(\W)\2/i.test(str)
