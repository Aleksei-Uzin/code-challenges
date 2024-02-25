/**
 * Search for letters
 * https://www.codewars.com/kata/52dbae61ca039685460001ae/train/javascript
 *
 */

const change = str =>
  [...str]
    .reduce(
      (abc, c) => (/[a-z]/i.test(c) ? abc.replace(new RegExp(c, 'i'), 1) : abc),
      'abcdefghijklmnopqrstuvwxyz'
    )
    .replace(/[a-z]/g, 0)
