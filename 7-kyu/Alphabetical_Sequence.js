/**
 * Alphabetical Sequence
 * https://www.codewars.com/kata/5bd00c99dbc73908bb00057a/train/javascript
 *
 */

const alphaSeq = str =>
  str
    .toLowerCase()
    .split('')
    .sort()
    .map(val => val.toUpperCase() + val.repeat(val.codePointAt(0) % 97))
    .join(',')
