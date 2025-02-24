/**
 * Words to Hex
 * https://www.codewars.com/kata/596e91b48c92ceff0c00001f/train/javascript
 *
 */

const wordsToHex = words =>
  words.split(' ').map(word => {
    let hex = '#'

    for (let i = 0; i < 3; i++) {
      hex += word[i]?.charCodeAt().toString(16) || '00'
    }

    return hex
  })
