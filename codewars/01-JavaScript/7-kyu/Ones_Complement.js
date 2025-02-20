/**
 * Ones' Complement
 * https://www.codewars.com/kata/59b11f57f322e5da45000254/train/javascript
 *
 */

const onesComplement = n => n.replace(/[01]/g, m => m ^ 1)
