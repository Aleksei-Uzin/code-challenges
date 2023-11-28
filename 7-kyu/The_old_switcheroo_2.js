/**
 * The old switcheroo 2
 * https://www.codewars.com/kata/55d6a0e4ededb894be000005/train/javascript
 *
 */

const encode = str =>
  str.replace(/[a-z]/gi, match => {
    const code = match.codePointAt()

    if (code >= 65 && code <= 90) return code - 64
    else return code - 96
  })
