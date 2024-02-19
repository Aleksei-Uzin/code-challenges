/**
 * Split In Parts
 * https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript
 *
 */

const splitInParts = (s, partLength) => {
  const re = new RegExp(`(.{${partLength}})(?=.{1})`, 'g')

  return s.replace(re, '$1 ')
}
