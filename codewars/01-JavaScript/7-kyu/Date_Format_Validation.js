/**
 * Date Format Validation
 * https://www.codewars.com/kata/57ce0c634001a5f3c7000006/train/javascript
 *
 */

const dateChecker = date => /^\d\d-\d\d-\d{4} \d\d:\d\d$/.test(date)
