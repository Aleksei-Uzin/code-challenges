/**
 * Are we alternate?
 * https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript
 *
 */

const isAlt = word => !/([aeiou]{2})|([^aeiou]{2})/.test(word)
