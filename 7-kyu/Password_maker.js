/**
 * Password maker
 * https://www.codewars.com/kata/5637b03c6be7e01d99000046/train/javascript
 *
 */

const makePassword = phrase =>
  phrase
    .match(/^\w|(?<=\s)\w/g)
    .map(val =>
      /i/i.test(val) ? 1 : /o/i.test(val) ? 0 : /s/i.test(val) ? 5 : val
    )
    .join('')
