/**
 * Encrypt this!
 * https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
 *
 */

const encryptThis = text =>
  text
    .split(' ')
    .map(word => {
      const len = word.length
      const code = word[0].charCodeAt(0)

      return len > 2
        ? `${code}${word[len - 1]}${word.slice(2, len - 1)}${word[1]}`
        : `${code}${word.slice(1)}`
    })
    .join(' ')
