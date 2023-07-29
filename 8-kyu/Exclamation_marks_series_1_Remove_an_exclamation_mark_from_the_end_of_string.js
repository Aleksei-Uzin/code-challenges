/**
 * Exclamation marks series #1: Remove an exclamation mark from the end of string
 * https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
 *
 */

const remove = str => str.slice(-1) === '!' ? str.slice(0, -1) : str
