/**
 * Meeting
 * https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
 *
 */

const meeting = str =>
  str
    .split(';')
    .map(val => val.toUpperCase().split(':').reverse().join(', '))
    .sort()
    .map(val => `(${val})`)
    .join('')
