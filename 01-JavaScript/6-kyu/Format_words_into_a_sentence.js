/**
 * Format words into a sentence
 * https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript
 *
 */

const formatWords = words =>
  (words || [])
    .filter(Boolean)
    .join(', ')
    .replace(/(,)(?=\s\w+$)/, ' and')
