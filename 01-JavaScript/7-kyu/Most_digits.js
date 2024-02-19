/**
 * Most digits
 * https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
 *
 */

const findLongest = array =>
  +array
    .map(String)
    .reduce((acc, val) => (acc.length < val.length ? val : acc), '')
