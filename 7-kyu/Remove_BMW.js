/**
 * Remove B M W
 * https://www.codewars.com/kata/59de795c289ef9197f000c48/train/javascript
 *
 */

const removeBMW = str => {
  if (typeof str !== 'string')
    throw new Error('This program only works for text.')

  return str.replace(/[bmw]/gi, '')
}
