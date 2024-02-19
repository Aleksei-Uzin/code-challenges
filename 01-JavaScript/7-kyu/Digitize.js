/**
 * Digitize
 * https://www.codewars.com/kata/5417423f9e2e6c2f040002ae/train/javascript
 *
 */

const digitize = n => n.toString().match(/\d/g).map(Number)
