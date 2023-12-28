/**
 * Bracket Duplicates
 * https://www.codewars.com/kata/5411c4205f3a7fd3f90009ea/train/javascript
 *
 */

const stringParse = str =>
  typeof str !== 'string'
    ? 'Please enter a valid string'
    : str.replace(
        /(\w)\1{2,}/g,
        match => `${match.slice(0, 2)}[${match.slice(2)}]`
      )
