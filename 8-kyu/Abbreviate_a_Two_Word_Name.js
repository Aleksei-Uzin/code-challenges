/**
 * Abbreviate a Two Word Name
 * https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
 *
 */

const abbrevName = name => name.match(/\b\w{1}/g).join('.').toUpperCase()
