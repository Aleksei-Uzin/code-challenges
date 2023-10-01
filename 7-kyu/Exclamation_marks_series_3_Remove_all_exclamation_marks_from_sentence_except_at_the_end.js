/**
 * Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
 * https://www.codewars.com/kata/57faefc42b531482d5000123/train/javascript
 *
 */

const remove = str => str.replace(/!(?!\!*$)/g, '')
