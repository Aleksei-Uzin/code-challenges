/**
 * Ermahgerd
 * https://www.codewars.com/kata/5660c1e9fae768c3b50000a6/train/javascript
 *
 */

const ermahgerd = text =>
  text
    .replace(/[aeiou]/gi, 'er')
    .replace(/er(er|h)/gi, 'er')
    .replace(/my/gi, 'mah')
    .replace(/rr/gi, 'r')
    .replace(/(?<=\b\w{2,})er\b/gi, '')
    .toUpperCase()
