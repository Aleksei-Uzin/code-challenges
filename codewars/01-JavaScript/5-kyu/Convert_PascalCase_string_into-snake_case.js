/**
 * Convert PascalCase string into snake_case
 * https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript
 *
 */

const toUnderscore = str =>
  `${str}`.replace(/(?<=.)([A-Z])/g, '_$1').toLowerCase()
