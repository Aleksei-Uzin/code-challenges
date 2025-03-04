/**
 * Coding 3min : Guess the Hat
 * https://www.codewars.com/kata/570ef7a834e61306da00035b/train/javascript
 *
 */

const sc = exchange => {
  return exchange.reduce((acc, str) => {
    if (str.includes(acc)) {
      return str[0] === acc ? str[2] : str[0]
    } else {
      return acc
    }
  }, '2')
}
