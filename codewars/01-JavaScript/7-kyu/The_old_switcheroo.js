/**
 * The old switcheroo
 * https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript
 *
 */

const vowel2index = str => str.replace(/[aeiou]/gi, (_, i) => i + 1)
