/**
 * Exclamation marks series #5: Remove all exclamation marks from the end of words
 * https://www.codewars.com/kata/57faf32df815ebd49e000117/train/javascript
 *
 */

const remove = str => str.replace(/\b!+/g, '')
