/**
 * All Star Code Challenge #13 : Pig Latin Translator
 * https://www.codewars.com/kata/5864e2c473bd9c67b70002ba/train/javascript
 *
 */

const translate = word =>
  word.length > 1 ? word.replace(/([^aeiou]?)(\w+)/, '$2$1ay') : word
