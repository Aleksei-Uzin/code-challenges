/**
 * Move 10
 * https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript
 *
 */

const moveTen = s =>
  s.replace(/[a-z]/g, m => {
    const code = (m.charCodeAt() + 10) % 123
    return String.fromCharCode(code < 97 ? 97 + code : code)
  })
