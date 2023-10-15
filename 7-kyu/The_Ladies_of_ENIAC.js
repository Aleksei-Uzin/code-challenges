/**
 * The Ladies of ENIAC
 * https://www.codewars.com/kata/56d31aaefd3a52902a000d66/train/javascript
 *
 */

const radLadies = name =>
  name
    .match(/[a-z\s!]/gi)
    .join('')
    .toUpperCase()
