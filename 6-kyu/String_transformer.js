/**
 * String transformer
 * https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript
 *
 */

const stringTransformer = str =>
  str
    .split(' ')
    .reverse()
    .map(word =>
      word.replace(/\w/g, match =>
        /[A-Z]/.test(match) ? match.toLowerCase() : match.toUpperCase()
      )
    )
    .join(' ')
