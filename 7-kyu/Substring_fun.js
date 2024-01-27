/**
 * Substring fun
 * https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/javascript
 *
 */

const nthChar = words => words.reduce((acc, word, i) => acc + word[i], '')
