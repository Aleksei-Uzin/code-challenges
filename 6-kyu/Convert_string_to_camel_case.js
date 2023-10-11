/**
 * Convert string to camel case
 * https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
 *
 */

const toCamelCase = str =>
  str
    .replaceAll('_', '-')
    .split('-')
    .map((val, i) =>
      i > 0 ? `${val.at(0).toUpperCase()}${val.slice(1)}` : val
    )
    .join('')
