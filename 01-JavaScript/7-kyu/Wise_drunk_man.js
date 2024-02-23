/**
 * Wise drunk man
 * https://www.codewars.com/kata/58e953ace87e856a97000046/train/javascript
 *
 */

const wdm = talk =>
  talk
    .replace(/(puke)|(hiccup)/g, '')
    .replace(/(\s{2,})/g, ' ')
    .trim()
