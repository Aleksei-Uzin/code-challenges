/**
 * CamelCase to underscore
 * https://www.codewars.com/kata/5b1956a7803388baae00003a/train/javascript
 *
 */

const toUnderScore = name =>
  name
    .replace(/[A-Z]|\d+/g, (val, n) => (n > 0 ? `_${val}` : val))
    .replaceAll('__', '_')
