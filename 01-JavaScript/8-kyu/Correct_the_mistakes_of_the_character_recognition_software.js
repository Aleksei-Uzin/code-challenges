/**
 * Correct the mistakes of the character recognition software
 * https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
 *
 */

const correct = str => str.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')
