/**
 * Weird words
 * https://www.codewars.com/kata/57b2020eb69bfcbf64000375/train/javascript
 *
 */

const nextLetter = str =>
  str.replace(/[a-z]/gi, match => {
    const code = match.charCodeAt()

    if (code === 90) return 'A'
    else if (code === 122) return 'a'
    else return String.fromCharCode(code + 1)
  })
