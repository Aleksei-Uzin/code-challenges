/**
 * Debug the functions EASY
 * https://www.codewars.com/kata/5844a422cbd2279a0c000281/train/javascript
 *
 */

const multi = arr => arr.reduce((acc, val) => acc * val, 1)

const add = arr => arr.reduce((acc, val) => acc + val, 0)

const reverse = str => str.split('').reverse().join('')
