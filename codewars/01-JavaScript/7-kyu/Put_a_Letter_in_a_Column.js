/**
 * Put a Letter in a Column
 * https://www.codewars.com/kata/563d54a7329a7af8f4000059/train/javascript
 *
 */

const buildRowText = (index, character) => '| | | | | | | | | |'
  .replace(/\s/g, (match, offset) => offset === index * 2 + 1 ? character : match)
