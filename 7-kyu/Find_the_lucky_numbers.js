/**
 * Find the lucky numbers
 * https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript
 *
 */

const filterLucky = arr => arr.filter(num => /7/.test(num.toString()))
