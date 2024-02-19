/**
 * Acrostic reader
 * https://www.codewars.com/kata/59b843b58bcb7766660000f6/train/javascript
 *
 */

const readOut = acrostic =>
  acrostic.reduce((acc, val) => acc + val.slice(0, 1), '')
