/**
 * My Aunt Sally
 * https://www.codewars.com/kata/5a15ffaa32b8b9271d000057/train/javascript
 *
 */

const myAuntSally = str =>
  str
    .split(' ')
    .filter(val => {
      const res = val.match(/([a-z])\1+/)
      return res && res[0].length === 2
    })
    .join(' ')
