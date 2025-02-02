/**
 * Remove consecutive duplicate words
 * https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
 *
 */

const removeConsecutiveDuplicates = string =>
  string.replace(/(\b\w+)(\s\1\b){1,}/g, '$1')
