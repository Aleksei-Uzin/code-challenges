/**
 * String basics
 * https://www.codewars.com/kata/56326c13e63f90538d00004e/train/javascript
 *
 */

const getUsersIds = str => {
  const arr = str.toLowerCase().split(/,\s+/)

  return arr.map(val => val.replace(/^\s*#*uid\s*|#|\s*$/g, ''))
}
