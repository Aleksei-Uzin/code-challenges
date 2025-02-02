/**
 * The Office IV - Find a Meeting Room
 * https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript
 *
 */

const meeting = (x, index = x.indexOf('O')) => index > -1 ? index : 'None available!'
