/**
 * Search JSON for any key value pair
 * https://www.codewars.com/kata/55d5da66a0e378b8bc0000c6/train/javascript
 *
 */

const getCharacters = ({ characters: c }, key, val) => c.filter(char => char[key]?.toLowerCase() === val.toLowerCase())
