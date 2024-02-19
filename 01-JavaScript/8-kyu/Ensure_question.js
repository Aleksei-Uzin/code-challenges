/**
 * Ensure question
 * https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript
 *
 */

const ensureQuestion = str => str.includes('?', -1) ? str : `${str}?`
