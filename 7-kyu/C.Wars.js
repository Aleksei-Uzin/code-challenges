/**
 * C.Wars
 * https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript
 *
 */

const initials = name =>
  name
    .replace(/\b\w/g, val => val.toUpperCase())
    .replace(/[^A-Z]+\s(?=\w)/g, '.')
