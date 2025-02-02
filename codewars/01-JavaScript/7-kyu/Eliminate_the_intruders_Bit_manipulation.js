/**
 * Eliminate the intruders! Bit manipulation
 * https://www.codewars.com/kata/5a0d38c9697598b67a000041/train/javascript
 *
 */

const eliminateUnsetBits = n => parseInt(n.replace(/0/g, '') || 0, 2)
