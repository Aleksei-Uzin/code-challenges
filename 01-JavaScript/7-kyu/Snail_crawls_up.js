/**
 * Snail crawls up
 * https://www.codewars.com/kata/5b93fecd8463745630001d05/train/javascript
 *
 */

const snail = (column, day, night) =>
  Math.ceil((column - night) / (day - night))
