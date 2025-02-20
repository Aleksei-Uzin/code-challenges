/**
 * Simple string reversal
 * https://www.codewars.com/kata/5a71939d373c2e634200008e/train/javascript
 *
 */

const solve = str => {
  let lastInd = str.length - 1

  return str.replace(/\S/g, (m, i, s) => {
    let char = s[lastInd--]

    while (char === ' ' && lastInd >= 0) {
      char = s[lastInd--]
    }

    return char
  })
}
