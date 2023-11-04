/**
 * Exclamation marks series #10:
 * Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word
 * https://www.codewars.com/kata/57fb04649610ce369a0006b8/train/javascript
 *
 */

const remove = str => {
  return str.replace(/!*\w+!*/g, match => {
    const count = Math.min(...match.split(/\w+/).map(val => val.length))

    return match.replace(/!+/g, '!'.repeat(count))
  })
}
