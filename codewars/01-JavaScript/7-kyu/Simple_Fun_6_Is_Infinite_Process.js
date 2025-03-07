/**
 * Simple Fun #6: Is Infinite Process?
 * https://www.codewars.com/kata/588431bb76933b84520000d3/train/javascript
 *
 */

const isInfiniteProcess = (a, b) => a > b || (b - a) % 2 !== 0
