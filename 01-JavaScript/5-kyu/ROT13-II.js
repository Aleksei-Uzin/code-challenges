/**
 * ROT13
 * https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript
 *
 */

const rot13 = str => {
  return str.replace(/[a-z]/gi, m => {
    const code = m.charCodeAt()
    const start = code >= 97 ? 97 : 65
    const res = (code + 13) % start

    return String.fromCharCode(start + (res >= 26 ? res % 26 : res))
  })
}
