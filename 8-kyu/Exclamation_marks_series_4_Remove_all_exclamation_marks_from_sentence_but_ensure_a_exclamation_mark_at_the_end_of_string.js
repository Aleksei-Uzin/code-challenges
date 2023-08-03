/**
 * Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
 * https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript
 *
 */

const remove = str => str.replaceAll('!', '') + '!'
