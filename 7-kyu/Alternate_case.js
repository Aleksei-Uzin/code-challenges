/**
 * Alternate case
 * https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript
 *
 */

const alternateCase = s =>
  s.replace(/\w/g, match =>
    /[A-Z]/.test(match) ? match.toLowerCase() : match.toUpperCase()
  )
