/**
 * Changing letters
 * https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript
 *
 */

const swap = str => str.replace(/[aeiou]/g, val => val.toUpperCase())
